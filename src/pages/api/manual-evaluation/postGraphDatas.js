let request = require('request');

export default async (req, res) => {
  try {
    const { data, savedDatas } = req.body;
    const fileURL = data.fileURL;
    const fileName = fileURL.split('/')[4].split('.')[0];
    const { tspThreshold, tspWidth, tspQuantity, defectThreshold, defectWidth, defectOption } = savedDatas;

    let start = new Date();
    const PostData = (callback) => {
      const options = {
        method: 'POST',
        // uri: 'http://127.0.0.1:5000/file-datas',
        uri: 'http://3.39.112.135:5000/file-datas',
        qs: {
          file_name: fileName,
          file_URL: fileURL,
          tsp_setting: `${tspThreshold}  ${tspWidth}  ${tspQuantity}`,
          defect_setting: `${defectThreshold}  ${defectWidth}  ${defectOption}`,
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
        // res.send(result);
        let end = new Date();
        console.log('총 소요 : ', (end - start) / 1000, ' 초');
        res.status(200).json(result);
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export const config = {
  api: {
    responseLimit: false,
  },
};
