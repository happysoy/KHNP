import { useContext } from 'react';
import { TableDataContext } from 'src/contexts/TableDataContext';

export default function useTableAction() {
  const { tableData, onChangeTableData, equipmentObjectData, onChangeEquipmentObject, onChangeEquipmentTube } =
    useContext(TableDataContext);

  return {
    tableData,
    onChangeTableData,
    equipmentObjectData,
    onChangeEquipmentObject,
    onChangeEquipmentTube,
  };
}
