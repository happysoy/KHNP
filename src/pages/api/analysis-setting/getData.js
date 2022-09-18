import executeQuery from '../../../common/config/db/db';

export default async (req, res) => {
  try {
    const { userName } = req.body;
    const result = await executeQuery({
      query: `SELECT * FROM AnalysisSetting WHERE userName=?`,
      values: [userName],
    });
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};
