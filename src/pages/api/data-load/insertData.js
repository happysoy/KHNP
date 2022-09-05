import executeQuery from '../../../common/config/db/db';

export default async (req, res) => {
  try {
    const {
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
      images,
    } = req.body;
    const directory = 'src/pages';
    const fileSize = '2M';
    const createDateSplit = createDate.split('T');
    const dueDateSplit = dueDate.split('T');

    const testPeriod = `${createDateSplit[0]}/${dueDateSplit[0]}`;
    console.log(images);
    // const images = 'https://cdnweb01.wikitree.co.kr/webdata/editor/202203/30/img_20220330160332_5b5ab5c0.webp';

    const result = await executeQuery({
      query: `INSERT INTO DATA(fileName, directory, fileSize, company, site, unitNo, equipment, testPeriod, tubeSetting, speed, detector, probe, images)
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
        images[0].preview,
      ],
    });
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};
