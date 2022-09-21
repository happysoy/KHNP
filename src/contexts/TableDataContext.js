import { createContext, useCallback, useEffect, useState } from 'react';
import useAuth from 'src/hooks/useAuth';
import { useSelector } from 'src/redux/store';

const TableDataContext = createContext();

function TableDataProvider({ children }) {
  const { user } = useAuth();
  const { savedDatas } = useSelector((state) => state.analysisSetting);
  const { savedDatasECT } = useSelector((state) => state.testInformation);
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

  const [userData, setUserData] = useState({});
  const [equipmentData, setEquipmentData] = useState({});
  const [signalAcquisitionData, setSignalAcquisitionData] = useState({});
  const [testInstrumentData, setTestInstrumentData] = useState({});

  const onChangeTableData = useCallback((data) => {
    setTableData(data);
  }, []);
  const onChangeUser = useCallback((data) => {
    setUserData(data);
  }, []);
  const onChangeEquipment = useCallback((data) => {
    setEquipmentData(data);
  }, []);

  const onChangeSignalAcquisition = useCallback((data) => {
    setSignalAcquisitionData(data);
  }, []);
  const onChangeTestInstrument = useCallback((data) => {
    setTestInstrumentData(data);
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
  useEffect(() => {
    if (savedDatasECT.length === 0) {
      return;
    }
    // savedDatasECT = SON.parse(savedDatasECT[0]?.jdoc);
    // const parseData = JSON.parse(savedDatasECT[0]?.jdoc);
    // console.log(parseData.userData);
    // onChangeUser(parseData.userData);
    // console.log('야호', savedDatasECT[0]?.jdoc['userData']);
  }, [savedDatasECT]);

  return (
    <TableDataContext.Provider
      value={{
        tableData,
        userData,
        equipmentData,
        signalAcquisitionData,
        testInstrumentData,
        onChangeUser,
        onChangeTableData,
        onChangeEquipment,
        onChangeSignalAcquisition,
        onChangeTestInstrument,
      }}
    >
      {children}
    </TableDataContext.Provider>
  );
}

export { TableDataContext, TableDataProvider };
