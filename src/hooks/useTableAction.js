import { useContext } from 'react';
import { TableDataContext } from 'src/contexts/TableDataContext';

export default function useTableAction() {
  const { equipmentObjectData, onChangeTableData, onChangeEquipmentObject, onChangeEquipmentTube } =
    useContext(TableDataContext);

  return { equipmentObjectData, onChangeTableData, onChangeEquipmentObject, onChangeEquipmentTube };
}
