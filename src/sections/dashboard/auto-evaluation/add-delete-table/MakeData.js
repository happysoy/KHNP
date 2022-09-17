import faker from 'faker';
import { useEffect } from 'react';
import { getTableHeader } from 'src/redux/slices/response-table';
import { useDispatch, useSelector } from 'src/redux/store';
import { signalAcquisition, equipmentObject, equipmentTube, testInstrument, randomColor } from './utils';

export default function makeData(type) {
  if (type === 'equipmentObject') {
    const { columns, data } = equipmentObject();
    return { columns, data };
  } else if (type === 'testInstrument') {
    const { columns, data } = testInstrument();
    return { columns, data };
  } else if (type === 'equipmentTube') {
    const { columns, data } = equipmentTube();
    return { columns, data };
  } else if (type === 'signalAcquisition') {
    const { columns, data } = signalAcquisition();
    return { columns, data };
  }
  console.log('야야', columns);

  // const { tableDatas } = useSelector((state) => state.tableDatas);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getTableHeader());
  // }, [dispatch]);

  // 렌더링 문젱
  // if (tableDatas) {
  //   tableDatas.map((item) => {
  //     let row = {
  //       ID: item.ID,
  //       firstName: item.firstName,
  //       lastName: item.lastName,
  //       age: item.age,
  //       email: item.email,
  //     };
  //     data.push(row);
  //   });

  return { columns: columns, data: data, skipReset: false };
}
