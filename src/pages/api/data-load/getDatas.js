import executeQuery from '../../../common/config/db/db_setting';

export default async (req, res) => {
  try {
    const result = await executeQuery({
      query: `SELECT * FROM DATA`,
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
