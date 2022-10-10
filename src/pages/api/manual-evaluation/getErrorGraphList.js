import executeQuery from '../../../common/config/db/db_data';

export default async (req, res) => {
  try {
    const result = await executeQuery({
      query: `SELECT pns AS id, json_extract(data, '$.TEI', '$.TEO') AS TEIO, json_extract(data, '$.defect_code') AS DEFECT_CODE, json_extract(data, '$.defect_location') AS DEFECT_LOCATION, json_extract(data, '$.defect_list') AS DEFECT_LIST FROM JONGMIN;`,
    });
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

export const config = {
  api: {
    responseLimit: false,
  },
};
