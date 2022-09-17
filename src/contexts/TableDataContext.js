import { createContext, useCallback, useState } from 'react';

const TableDataContext = createContext();

function TableDataProvider({ children }) {
  const [tableData, setTableData] = useState({
    userName: '',
    tspThreshold: '',
    tspWidth: '',
    tspQuantity: '',
    defectThreshold: '',
    defectWidth: '',
    defectOption: '',
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
