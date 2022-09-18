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

  const [progress, setProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);
  const [file, setFile] = useState(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const fileList = [];

  AWS.config.update({
    accessKeyId: process.env.NEXT_PUBLIC_ACCESS_KEY,
    secretAccessKey: process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY,
  });

  const myBucket = new AWS.S3({
    params: { Bucket: process.env.NEXT_PUBLIC_S3_BUCKET },
    region: process.env.NEXT_PUBLIC_REGION,
  });

  // const handleFileInput = (e) => {
  //   console.log(e);
  //   const file = e.target.files[0];
  // };

  const uploadFile = (file) => {
    file.map((item) => {
      let directory = item.webkitRelativePath.split('/')[0];

      const params = {
        ACL: 'public-read',
        Body: item,
        Bucket: process.env.NEXT_PUBLIC_S3_BUCKET,
        Key: `${directory}/` + item.name,
      };
      // console.log(item);
      myBucket
        .putObject(params)
        .on('httpUploadProgress', (evt) => {
          setProgress(Math.round((evt.loaded / evt.total) * 100));
          setShowAlert(true);
        })
        .send((err) => {
          if (err) console.log(err);
        });
    });
  };

  const prepareFile = (file) => {
    const fileExt = file.name.split('.').pop();
    if (fileExt !== 'dat') {
      alert('dat 파일만 업로드 할 수 있습니다');
      return;
    }
    // console.log(file);
    fileList.push(file);
    // setProgress(0);
    setSelectedFiles(fileList);
  };

  // useEffect(() => {
  //   if (fileList === null) {
  //     return;
  //   }
  //   console.log('야호', fileList);
  //   // const fileExt = fileList.name.split('.').pop();
  //   // console.log(fileExt);
  //   // if (fileExt !== 'dat') {
  //   //   alert('dat 파일만 업로드 할 수 있습니다');
  //   //   return;
  //   // }
  //   // setProgress(0);
  //   // setSelectedFile(file);
  // }, [fileList]);

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
                <Alert color="error">폴더 선택 후 업로드 버튼을 눌러주세요</Alert>
              )}
            </Box>
            <Box sx={{ mt: 2 }}>
              {/* <label className="btn btn-default btn-file">
                폴더 추가 */}
              <input
                type="file"
                id="filepicker"
                name="fileList"
                webkitdirectory="true"
                multiple
                sx={{ display: 'none' }}
                // accept=".jpg"
                onChange={(event) => {
                  for (const file of event.target.files) {
                    prepareFile(file);
                    field.onChange(fileList);
                    // setFileList([...fileList, file]);
                    // console.log(...fileList);
                    // console.log(file.webkitRelativePath); // dat_example/SK-04-01-CD-C2-03-002013.dat
                  }
                  // const keys = Object.keys(e.target.files);
                  // for (let i = 0; i < keys.length; i++) {
                  //   // setFile(e.target.files[i])
                  //   console.log(e.target.files[i]);
                  // }
                }}
              />
              {/* </label> */}

              {/* <input
                type="file"
                onChange={(e) => {
                  setFile(e.target.files[0]);
                  field.onChange({ name: e.target.files[0].name, size: e.target.files[0].size });
                }}
              /> */}
              {selectedFiles.length !== 0 ? (
                <Button
                  sx={{ ml: 15 }}
                  variant="outlined"
                  size="small"
                  color="primary"
                  onClick={() => uploadFile(selectedFiles)}
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
