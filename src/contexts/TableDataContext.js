import { createContext, useCallback, useState } from 'react';

const TableDataContext = createContext();

function TableDataProvider({ children }) {
  const [tableData, setTableData] = useState([]);
  const [equipmentObjectData, setEquipmentObjectData] = useState([]);
  const [equipmentTubeData, setEquipmentTubeData] = useState([]);
  const onChangeEquipmentObject = useCallback((data) => {
    setEquipmentObjectData(data);
  }, []);
  const onChangeEquipmentTube = useCallback((data) => {
    setEquipmentTubeData(data);
  }, []);
  const onChangeTableData = useCallback((data) => {
    setTableData(data);
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
