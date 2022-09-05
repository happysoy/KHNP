// aws
import AWS from 'aws-sdk';
// form
import { useFormContext, Controller } from 'react-hook-form';
// react
import { useEffect, useState } from 'react';
// @mui
import { FormHelperText, Box, Button, Alert } from '@mui/material';

export function RHFUploadDatFile({ name, ...other }) {
  const { control } = useFormContext();

  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  const ACCESS_KEY = 'AKIAS55UZLJMB4CQCJGG';
  const SECRET_ACCESS_KEY = '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';
  const REGION = 'ap-northeast-2';
  const S3_BUCKET = 'khnp-deep-ai';

  AWS.config.update({
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_ACCESS_KEY,
  });

  const myBucket = new AWS.S3({
    params: { Bucket: S3_BUCKET },
    region: REGION,
  });

  // const handleFileInput = (e) => {
  //   console.log(e);
  //   const file = e.target.files[0];
  // };

  const uploadFile = (file) => {
    const params = {
      ACL: 'public-read',
      Body: file,
      Bucket: S3_BUCKET,
      Key: file.name,
    };

    myBucket
      .putObject(params)
      .on('httpUploadProgress', (evt) => {
        setProgress(Math.round((evt.loaded / evt.total) * 100));
        setShowAlert(true);
      })
      .send((err) => {
        if (err) console.log(err);
      });
  };
  useEffect(() => {
    if (file === null) {
      return;
    }
    const fileExt = file.name.split('.').pop();
    if (fileExt !== 'dat') {
      alert('dat 파일만 업로드 할 수 있습니다');
      return;
    }
    setProgress(0);
    setSelectedFile(file);
  }, [file]);
  // useEffect(() => {
  //   console.log('file', file);
  //   const fileExt = file.name.split('.').pop();

  //   if (fileExt !== 'dat') {
  //     alert('dat 파일만 업로드 할 수 있습니다');
  //     return;
  //   }

  //   setProgress(0);
  //   setSelectedFile(e.target.files[0]);
  // }, [file]);
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const checkError = !!error && field.value?.length === 0;

        return (
          <Box>
            <Box sx={{ mt: 2 }}>
              <input
                type="file"
                onChange={(e) => {
                  setFile(e.target.files[0]);
                  field.onChange(e.target.files[0]);
                }}
              />

              {selectedFile ? (
                <Button
                  sx={{ ml: 15 }}
                  variant="outlined"
                  size="small"
                  color="primary"
                  onClick={() => uploadFile(selectedFile)}
                >
                  업로드하기
                </Button>
              ) : null}
              <Box sx={{ mt: 1 }}>
                {showAlert ? (
                  <Alert color="primary">업로드 진행률 : {progress}%</Alert>
                ) : (
                  <Alert color="error">파일을 선택해 주세요.</Alert>
                )}
              </Box>
            </Box>
          </Box>
        );
      }}
    />
  );
}
