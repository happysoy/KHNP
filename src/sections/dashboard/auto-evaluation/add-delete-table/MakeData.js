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
  const { equipmentData, signalAcquisitionData, testInstrumentData } = useTableAction();
  const { equipmentObject, equipmentTube } = equipmentData;

  const { signalAcquisition } = signalAcquisitionData;
  const { testInstrument } = testInstrumentData;

  if (type === 'equipmentObject') {
    let { columns, data } = equipmentObjectFormat();

    if (savedDatasECT.length !== 0) {
      const parseECT = JSON.parse(savedDatasECT[0]?.jdoc);
      data = parseECT.equipmentData.equipmentObject;
    }
    console.log('equoipmetn', equipmentObject);
    if (equipmentObject !== undefined) {
      data = equipmentObject;
    }
    return { columns, data };
  } else if (type === 'equipmentTube') {
    let { columns, data } = equipmentTubeFormat();

    if (savedDatasECT.length !== 0) {
      const parseECT = JSON.parse(savedDatasECT[0]?.jdoc);
      data = parseECT.equipmentData.equipmentTube.data;
      columns = parseECT.equipmentData.equipmentTube.columns;
    }

    if (equipmentTube !== undefined) {
      data = equipmentTube.data;
      columns = equipmentTube.columns;
    }
    return { columns, data };
  } else if (type === 'signalAcquisition') {
    let { columns, data } = signalAcquisitionFormat();
    // console.log(signalAcquisition);
    if (savedDatasECT.length !== 0) {
      const parseECT = JSON.parse(savedDatasECT[0]?.jdoc);
      data = parseECT.signalAcquisitionData.signalAcquisition.data;
      columns = parseECT.signalAcquisitionData.signalAcquisition.columns;
    }
    if (signalAcquisition !== undefined) {
      data = signalAcquisition.data;
      columns = signalAcquisition.columns;
    }
    return { columns, data };
  } else if (type === 'testInstrument') {
    let { columns, data } = testInstrumentFormat();
    if (savedDatasECT.length !== 0) {
      // db에 저장된 데이터 불러오기
      const parseECT = JSON.parse(savedDatasECT[0]?.jdoc);
      data = parseECT.testInstrumentData.testInstrument;
    }
    if (testInstrument !== undefined) {
      // 임시 데이터 저장
      data = testInstrument;
    }
    return { columns, data };
  }

  return { columns: columns, data: data, skipReset: false };
}
