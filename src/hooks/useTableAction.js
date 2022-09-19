import { useContext } from 'react';
import { TableDataContext } from 'src/contexts/TableDataContext';

export default function useTableAction() {
  const {
    tableData,
    userData,
    equipmentData,
    signalAcquisitionData,
    testInstrumentData,
    onChangeTableData,
    onChangeUser,
    onChangeEquipment,
    onChangeSignalAcquisition,
    onChangeTestInstrument,
  } = useContext(TableDataContext);

  return {
    tableData,
    userData,
    equipmentData,
    signalAcquisitionData,
    testInstrumentData,
    onChangeTableData,
    onChangeUser,
    onChangeEquipment,
    onChangeSignalAcquisition,
    onChangeTestInstrument,
  };
}
