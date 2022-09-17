let request = require('request');

export default async (req, res) => {
  try {
    console.log(req.body);
    const fileURL = req.body.fileURL;
    const fileName = fileURL.split('/')[4].split('.')[0];

    const PostData = (callback) => {
      const options = {
        method: 'POST',
        uri: 'http://127.0.0.1:5000/file-datas',
        qs: {
          file_name: fileName,
          file_URL: fileURL,
        },
      };
      request(options, function (err, res, body) {
        callback(undefined, {
          result: body,
        });
      });
    };

    PostData((err, { result } = {}) => {
      if (err) {
        console.log('error in nextjs & flask');
        res.send({
          message: 'fail',
          status: 'fail',
        });
      } else {
        // console.log('flask로부터 받아온 정보 >> ', result);
        // res.send(result);
        res.status(200).json(result);
      }
    });
  } catch (error) {
    console.log(error);
  }
};
