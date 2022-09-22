import executeQuery from '../../../common/config/db/db';

export default async (req, res) => {
  try {
    const { obj } = req.body;
    const stringData = JSON.stringify(req.body);

    const result = await executeQuery({
      query: `DELETE FROM ECTtestInformation  WHERE JSON_EXTRACT(jdoc, '$.obj.userName') = (?);`,
      values: [obj.userName],
    });
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};
