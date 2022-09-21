export function shortId() {
  return '_' + Math.random().toString(36).substr(2, 9);
}

export function randomColor() {
  return `hsl(${Math.floor(Math.random() * 360)}, 95%, 90%)`;
}

export function signalAcquisitionFormat() {
  let data = [];
  const count = 2;
  for (let i = 0; i < count; i++) {
    let row = {
      ID: 'signalAcquisition',
      구분: '',
      사용주파수: '',
      보조주파수: '',
      MIX주파수: '',
    };

    data.push(row);
  }

  let columns = [
    {
      id: '구분',
      label: '구분',
      accessor: '구분',
      maxwidth: 20,
      dataType: 'text',
      options: [],
    },
    {
      id: '사용주파수',
      label: '사용 주파수',
      accessor: '사용주파수',
      maxwidth: 20,
      dataType: 'text',
      options: [],
    },
    {
      id: '보조주파수',
      label: '보조 주파수',
      accessor: '보조주파수',
      maxwidth: 20,
      dataType: 'text',
      options: [],
    },
    {
      id: 'MIX주파수',
      label: 'MIX 주파수',
      accessor: 'MIX주파수',
      maxwidth: 20,
      dataType: 'text',
      options: [],
    },

    {
      id: 999999,
      width: 20,
      label: '+',
      disableResizing: true,
      dataType: 'null',
    },
  ];
  return { columns, data };
}

export function equipmentObjectFormat() {
  let data = [];
  const content = [
    'Equipment Name',
    'Maker',
    'Tube Type',
    'Tube Material',
    'Size of Tube(O.D)',
    'Size of Tube(I.D)',
    'Size of Tube(Thickness)',
    'Length of Tube',
  ];

  for (let i = 0; i < content.length; i++) {
    let row = {
      ID: 'equipmentObject',
      항목: content[i],
      사양: '',
    };

    data.push(row);
  }

  let columns = [
    {
      id: '항목',
      label: '항목',
      accessor: '항목',
      minWidth: 10,
      dataType: 'text',
      options: [],
    },
    {
      id: '사양',
      label: '사양',
      accessor: '사양',
      maxwidth: 20,
      dataType: 'text',
      options: [],
    },
  ];
  return { columns, data };
}
export function equipmentTubeFormat() {
  let data = [];
  const content = ['총 전열관', '기존 관막음수', 'No Tube', '검사 수량', '비 고'];

  for (let i = 0; i < content.length; i++) {
    let row = {
      ID: 'equipmentTube',
      구분: content[i],
    };

    data.push(row);
  }

  let columns = [
    {
      id: '구분',
      label: '구분',
      accessor: '구분',
      maxwidth: 20,
      dataType: 'text',
      options: [],
    },
    {
      id: 999999,
      width: 20,
      label: '+',
      disableResizing: true,
      dataType: 'null',
    },
  ];
  return { columns, data };
}
export function testInstrumentFormat() {
  let data = [];
  const content = ['신호수집 detector', '탐촉자', '교정시편'];
  for (let i = 0; i < content.length; i++) {
    let row = {
      ID: 'testInstrument',
      구분: content[i],
    };

    data.push(row);
  }

  let columns = [
    {
      id: '구분',
      label: '구분',
      accessor: '구분',
      maxwidth: 20,
      dataType: 'text',
      options: [],
    },
    {
      id: '사양',
      label: '사양',
      accessor: '사양',
      maxwidth: 20,
      dataType: 'text',
      options: [],
    },
    {
      id: '수량',
      label: '수량',
      accessor: '수량',
      maxwidth: 20,
      dataType: 'text',
      options: [],
    },
    {
      id: '비고',
      label: '비고',
      accessor: '비고',
      maxwidth: 20,
      dataType: 'text',
      options: [],
    },
  ];
  return { columns, data };
}
