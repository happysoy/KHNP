import executeQuery from '../../../common/config/db/db_setting';

export default async (req, res) => {
  try {
    const { userName } = req.body;
    const result = await executeQuery({
      query: `SELECT JSON_EXTRACT(jdoc, '$') as jdoc FROM ECTtestInformation WHERE JSON_EXTRACT(jdoc, '$.obj.userName') = (?)`,
      values: [userName],
    });
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};
