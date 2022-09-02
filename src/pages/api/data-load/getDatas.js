import executeQuery from "../../../common/config/db/db";

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
