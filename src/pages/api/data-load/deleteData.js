import executeQuery from '../../../common/config/db/db_setting';

export default async (req, res) => {
  try {
    const { id } = req.body;
    const result = await executeQuery({
      query: `DELETE FROM DATA WHERE ID=(?)`,
      values: [id],
    });
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};
