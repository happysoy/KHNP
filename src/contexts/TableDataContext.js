import { createContext, useCallback, useEffect, useState } from 'react';
import useAuth from 'src/hooks/useAuth';
import { useSelector } from 'src/redux/store';

const TableDataContext = createContext();

function TableDataProvider({ children }) {
  const { user } = useAuth();
  const { savedDatas } = useSelector((state) => state.analysisSetting);

  const [tableData, setTableData] = useState({
    userName: '',
    tspThreshold: '',
    tspWidth: '',
    tspQuantity: '',
    defectThreshold: '',
    defectWidth: '',
    defectOption: '',
    calcurve20: '',
    calcurve40: '',
    calcurve60: '',
    calcurve80: '',
  });

  const [equipmentObjectData, setEquipmentObjectData] = useState([]);
  const [equipmentTubeData, setEquipmentTubeData] = useState([]);
  const onChangeTableData = useCallback((data) => {
    setTableData(data);
  }, []);
  const onChangeEquipmentObject = useCallback((data) => {
    setEquipmentObjectData(data);
  }, []);
  const onChangeEquipmentTube = useCallback((data) => {
    setEquipmentTubeData(data);
  }, []);

  useEffect(() => {
    onChangeTableData({
      ...tableData,
      userName: user?.displayName,
      tspThreshold: savedDatas[0]?.tspThreshold,
      tspWidth: savedDatas[0]?.tspWidth,
      tspQuantity: savedDatas[0]?.tspQuantity,
      defectThreshold: savedDatas[0]?.defectThreshold,
      defectWidth: savedDatas[0]?.defectWidth,
      defectOption: savedDatas[0]?.defectOption,
      calcurve20: savedDatas[0]?.calcurve20,
      calcurve40: savedDatas[0]?.calcurve40,
      calcurve60: savedDatas[0]?.calcurve60,
      calcurve80: savedDatas[0]?.calcurve80,
    });
  }, [savedDatas, user]);
  // console.log('equipmentObject', equipmentObjectData);
  // console.log('equipmentTube', equipmentTubeData);

  return (
    <TableDataContext.Provider
      value={{
        tableData,
        onChangeTableData,
        equipmentObjectData,
        onChangeEquipmentObject,
        equipmentTubeData,
        onChangeEquipmentTube,
      }}
    >
      {children}
    </TableDataContext.Provider>
  );
}

export { TableDataContext, TableDataProvider };
