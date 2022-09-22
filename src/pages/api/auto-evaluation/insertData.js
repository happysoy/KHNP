import executeQuery from '../../../common/config/db/db';

export default async (req, res) => {
  try {
    const { obj } = req.body;
    // const { userName, userData, equipmentData, signalAcquisitionData, testInstrumentData } = req.body;
    const stringData = JSON.stringify(req.body);

    const result = await executeQuery({
      query: `INSERT INTO ECTtestInformation(jdoc) VALUES (?)`,
      values: [stringData],
    });
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};
