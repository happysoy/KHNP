import executeQuery from '../../../common/config/db/db_setting';

export default async (req, res) => {
  try {
    const {
      userName,
      tspThreshold,
      tspWidth,
      tspQuantity,
      defectThreshold,
      defectWidth,
      defectOption,
      calcurve20,
      calcurve40,
      calcurve60,
      calcurve80,
    } = req.body;

    const result = await executeQuery({
      query: `INSERT INTO AnalysisSetting(userName, tspThreshold, tspWidth, tspQuantity, defectThreshold, defectWidth, defectOption, calcurve20, calcurve40, calcurve60, calcurve80  )
      VALUES (?,?,?,?,?,?,?,?,?,?,?);`,
      values: [
        userName,
        tspThreshold,
        tspWidth,
        tspQuantity,
        defectThreshold,
        defectWidth,
        defectOption,
        calcurve20,
        calcurve40,
        calcurve60,
        calcurve80,
      ],
    });
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};
