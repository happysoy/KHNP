import executeQuery from '../../../common/config/db/db_data';

export default async (req, res) => {
  try {
    const { fileName, savedDatas } = req.body;
    // const fileURL = data.fileURL;
    // const fileName = fileURL.split('/')[4].split('.')[0];

    const result = await executeQuery({
      query: `SELECT json_extract(data, '$."final_data"') as channel_data FROM JONGMIN WHERE pns=(?);`,
      values: [fileName],
    });
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

export const config = {
  api: {
    responseLimit: false,
  },
};
