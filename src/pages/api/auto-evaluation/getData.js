import executeQuery from '../../../common/config/db/db';

export default async (req, res) => {
  try {
    // const { userName } = req.body;
    const result = await executeQuery({
      query: `SELECT jdoc FROM ECTtestInformation`,
    });
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};
