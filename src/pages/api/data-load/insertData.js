import executeQuery from '../../../common/config/db/db_setting';

export default async (req, res) => {
  try {
    const { name, lastModifiedDate, size, webkitRelativePath } = req.body;
    const fileSize = size;
    const testPeriod = lastModifiedDate;
    const path = webkitRelativePath.split('/')[0];

    // const createDateSplit = createDate.split('T');
    // const dueDateSplit = dueDate.split('T');
    // const testPeriod = `${createDateSplit[0]}/${dueDateSplit[0]}`;
    const fileURL = `https://khnp-deep-ai.s3.ap-northeast-2.amazonaws.com/${path}/${name}`;

    const splitName = name.split('.')[0];

    const result = await executeQuery({
      query: `INSERT INTO DATA(fileName, directory, fileSize, testPeriod, fileURL )
      VALUES (?,?,?,?,?);`,
      values: [splitName, path, fileSize, testPeriod, fileURL],
    });
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};
