import executeQuery from '../../../common/config/db/db';

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
      query: `UPDATE AnalysisSetting SET tspThreshold=?, tspWidth=?, tspQuantity=?, defectThreshold=?, defectWidth=?, defectOption=?, calcurve20=?, calcurve40=?, calcurve60=?, calcurve80=? WHERE userName=?`,
      values: [
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
        userName,
      ],
    });
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};
