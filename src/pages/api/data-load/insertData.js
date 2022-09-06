import executeQuery from '../../../common/config/db/db';

export default async (req, res) => {
  try {
    const {
      files,
      unitNo,
      company,
      fileName,
      site,
      createDate,
      dueDate,
      tubeSetting,
      equipment,
      speed,
      detector,
      probe,
    } = req.body;
    const directory = 'src/pages';
    const fileSize = files.size;
    const createDateSplit = createDate.split('T');
    const dueDateSplit = dueDate.split('T');

    const testPeriod = `${createDateSplit[0]}/${dueDateSplit[0]}`;
    const fileURL = `https://khnp-deep-ai.s3.ap-northeast-2.amazonaws.com/${files.name}`;
    // const images = 'https://cdnweb01.wikitree.co.kr/webdata/editor/202203/30/img_20220330160332_5b5ab5c0.webp';

    const result = await executeQuery({
      query: `INSERT INTO DATA(fileName, directory, fileSize, company, site, unitNo, equipment, testPeriod, tubeSetting, speed, detector, probe,fileURL )
      VALUES (?, ?,?,?,?,?,?,?,?,?,?,?,?);`,
      values: [
        fileName,
        directory,
        fileSize,
        company,
        site,
        unitNo,
        equipment,
        testPeriod,
        tubeSetting,
        speed,
        detector,
        probe,
        fileURL,
      ],
    });
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};
