import executeQuery from "src/common/config/db/db";

export default async (req, res) => {
  try {
    const {
      unitNo,
      company,
      fileName,
      site,
      tubeSetting,
      equipment,
      speed,
      detector,
      probe,
    } = req.body;
    const directory = "src/pages";
    const fileSize = "2M";
    const testPeriod = "2020";
    const images =
      "https://cdnweb01.wikitree.co.kr/webdata/editor/202203/30/img_20220330160332_5b5ab5c0.webp";

    const result = await executeQuery({
      query: `INSERT INTO DATA(fileName, directory, fileSize, company, site, unitNo, equipment, tubeSetting, speed, detector, probe, images)
      VALUES (?, ?,?,?,?,?,?,?,?,?,?,?);`,
      values: [
        fileName,
        directory,
        fileSize,
        company,
        site,
        unitNo,
        equipment[0],
        tubeSetting,
        speed[0],
        detector[0],
        probe[0],
        images,
      ],
    });
    console.log("메러러러럴ㅇ", result);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};
