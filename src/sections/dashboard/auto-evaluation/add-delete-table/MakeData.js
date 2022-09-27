import faker from 'faker';
import { useEffect, useState } from 'react';
import { getTableHeader } from 'src/redux/slices/response-table';
import { useDispatch, useSelector } from 'src/redux/store';
import {
  signalAcquisitionFormat,
  equipmentObjectFormat,
  equipmentTubeFormat,
  testInstrumentFormat,
  randomColor,
} from './utils';
import useTableAction from 'src/hooks/useTableAction';

export default function makeData(type, savedDatasECT) {
  // const [isSave, setIsSave] = useState(false);
  // 임시 저장 데이터

  // 수정이 안됨
  // console.log('저장', savedDatasECT);
  const { isResetEquipment, isResetSignalAcquisition, isResetTestInstrument } = useSelector(
    (state) => state.testInformation
  );
  const { equipmentData, signalAcquisitionData, testInstrumentData } = useTableAction();
  // console.log('equipment', equipmentData);
  const { equipmentObject, equipmentTube } = equipmentData;

  const { signalAcquisition } = signalAcquisitionData;
  const { testInstrument } = testInstrumentData;

  if (type === 'equipmentObject') {
    let { columns, data } = equipmentObjectFormat();

    if (!isResetEquipment && savedDatasECT.length !== 0) {
      // new 버튼을 누르지 않고 &&
      // 저장된 데이터
      const parseECT = JSON.parse(savedDatasECT[0]?.jdoc);
      data = parseECT.equipmentData.equipmentObject;
    }

    if (!isResetEquipment && equipmentObject !== undefined) {
      // new 버튼을 누르지 않고 &&
      // 임시 데이터 저장되는 경우
      data = equipmentObject;
    }

    return { columns, data };
  } else if (type === 'equipmentTube') {
    let { columns, data } = equipmentTubeFormat();

    if (!isResetEquipment && savedDatasECT.length !== 0) {
      const parseECT = JSON.parse(savedDatasECT[0]?.jdoc);
      data = parseECT.equipmentData.equipmentTube.data;
      columns = parseECT.equipmentData.equipmentTube.columns;
    }

    if (!isResetEquipment && equipmentTube !== undefined) {
      data = equipmentTube.data;
      columns = equipmentTube.columns;
    }
    return { columns, data };
  } else if (type === 'signalAcquisition') {
    let { columns, data } = signalAcquisitionFormat();
    // console.log(signalAcquisition);
    if (!isResetSignalAcquisition && savedDatasECT.length !== 0) {
      const parseECT = JSON.parse(savedDatasECT[0]?.jdoc);
      data = parseECT.signalAcquisitionData.signalAcquisition.data;
      columns = parseECT.signalAcquisitionData.signalAcquisition.columns;
    }
    if (!isResetSignalAcquisition && signalAcquisition !== undefined) {
      data = signalAcquisition.data;
      columns = signalAcquisition.columns;
    }
    return { columns, data };
  } else if (type === 'testInstrument') {
    let { columns, data } = testInstrumentFormat();
    if (!isResetTestInstrument && savedDatasECT.length !== 0) {
      // db에 저장된 데이터 불러오기
      const parseECT = JSON.parse(savedDatasECT[0]?.jdoc);
      data = parseECT.testInstrumentData.testInstrument;
    }
    if (!isResetTestInstrument && testInstrument !== undefined) {
      // 임시 데이터 저장
      data = testInstrument;
    }
    return { columns, data };
  }

  return { columns: columns, data: data, skipReset: false };
}
