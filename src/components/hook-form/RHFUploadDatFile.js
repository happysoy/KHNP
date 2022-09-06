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

  AWS.config.update({
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
  });

  const myBucket = new AWS.S3({
    params: { Bucket: process.env.S3_BUCKET },
    region: process.env.REGION,
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

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const checkError = !!error && field.value?.length === 0;

        return (
          <Box>
            <Box>
              {showAlert ? (
                <Alert color="primary">업로드 진행률 : {progress}%</Alert>
              ) : (
                <Alert color="error">파일 선택 후 업로드 버튼을 눌러주세요</Alert>
              )}
            </Box>
            <Box sx={{ mt: 2 }}>
              <input
                type="file"
                onChange={(e) => {
                  setFile(e.target.files[0]);
                  field.onChange({ name: e.target.files[0].name, size: e.target.files[0].size });
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
            </Box>
          </Box>
        );
      }}
    />
  );
}
