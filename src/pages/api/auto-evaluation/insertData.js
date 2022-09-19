import executeQuery from '../../../common/config/db/db';

export default async (req, res) => {
  try {
    const { userData, equipmentData, signalAcquisitionData, testInstrumentData } = req.body;
    const stringData = JSON.stringify(req.body);

    const result = await executeQuery({
      query: `INSERT INTO ECTtestInformation(jdoc) VALUES (?)`,
      values: [stringData],
    });
    console.log(result);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};
