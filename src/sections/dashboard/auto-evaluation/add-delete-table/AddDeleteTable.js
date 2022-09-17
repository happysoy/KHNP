import { useEffect, useReducer } from 'react';
import Table from './Table';
import makeData from './MakeData';
import { randomColor, shortId, ActionTypes, DataTypes } from './utils';
import { grey } from './colors';
// hooks
import useTableAction from 'src/hooks/useTableAction';

function reducer(state, action) {
  switch (action.type) {
    case 'add_option_to_column':
      const optionIndex = state.columns.findIndex((column) => column.id === action.columnId);
      return {
        ...state,
        skipReset: true,
        columns: [
          ...state.columns.slice(0, optionIndex),
          {
            ...state.columns[optionIndex],
            options: [
              ...state.columns[optionIndex].options,
              { label: action.option, backgroundColor: action.backgroundColor },
            ],
          },
          ...state.columns.slice(optionIndex + 1, state.columns.length),
        ],
      };
    case 'add_row':
      return {
        ...state,
        skipReset: true,
        data: [...state.data, {}],
      };
    case 'update_column_type':
      const typeIndex = state.columns.findIndex((column) => column.id === action.columnId);
      switch (action.dataType) {
        case 'number':
          if (state.columns[typeIndex].dataType === 'number') {
            return state;
          } else {
            return {
              ...state,
              columns: [
                ...state.columns.slice(0, typeIndex),
                { ...state.columns[typeIndex], dataType: action.dataType },
                ...state.columns.slice(typeIndex + 1, state.columns.length),
              ],
              data: state.data.map((row) => ({
                ...row,
                [action.columnId]: isNaN(row[action.columnId]) ? '' : Number.parseInt(row[action.columnId]),
              })),
            };
          }
        case 'select':
          if (state.columns[typeIndex].dataType === 'select') {
            return {
              ...state,
              columns: [
                ...state.columns.slice(0, typeIndex),
                { ...state.columns[typeIndex], dataType: action.dataType },
                ...state.columns.slice(typeIndex + 1, state.columns.length),
              ],
              skipReset: true,
            };
          } else {
            let options = [];
            state.data.forEach((row) => {
              if (row[action.columnId]) {
                options.push({
                  label: row[action.columnId],
                  backgroundColor: randomColor(),
                });
              }
            });
            return {
              ...state,
              columns: [
                ...state.columns.slice(0, typeIndex),
                {
                  ...state.columns[typeIndex],
                  dataType: action.dataType,
                  options: [...state.columns[typeIndex].options, ...options],
                },
                ...state.columns.slice(typeIndex + 1, state.columns.length),
              ],
              skipReset: true,
            };
          }
        case 'text':
          if (state.columns[typeIndex].dataType === 'text') {
            return state;
          } else if (state.columns[typeIndex].dataType === 'select') {
            return {
              ...state,
              skipReset: true,
              columns: [
                ...state.columns.slice(0, typeIndex),
                { ...state.columns[typeIndex], dataType: action.dataType },
                ...state.columns.slice(typeIndex + 1, state.columns.length),
              ],
            };
          } else {
            return {
              ...state,
              skipReset: true,
              columns: [
                ...state.columns.slice(0, typeIndex),
                { ...state.columns[typeIndex], dataType: action.dataType },
                ...state.columns.slice(typeIndex + 1, state.columns.length),
              ],
              data: state.data.map((row) => ({
                ...row,
                [action.columnId]: row[action.columnId] + '',
              })),
            };
          }
        default:
          return state;
      }
    case 'update_column_header':
      const index = state.columns.findIndex((column) => column.id === action.columnId);
      return {
        ...state,
        skipReset: true,
        columns: [
          ...state.columns.slice(0, index),
          { ...state.columns[index], label: action.label },
          ...state.columns.slice(index + 1, state.columns.length),
        ],
      };
    case 'update_cell':
      return {
        ...state,
        skipReset: true,
        data: state.data.map((row, index) => {
          if (index === action.rowIndex) {
            return {
              ...state.data[action.rowIndex],
              [action.columnId]: action.value,
            };
          }
          return row;
        }),
      };
    case 'add_column_to_left':
      const leftIndex = state.columns.findIndex((column) => column.id === action.columnId);
      let leftId = shortId();
      return {
        ...state,
        skipReset: true,
        columns: [
          ...state.columns.slice(0, leftIndex),
          {
            id: leftId,
            label: 'Column',
            accessor: leftId,
            dataType: 'text',
            created: action.focus && true,
            options: [],
          },
          ...state.columns.slice(leftIndex, state.columns.length),
        ],
      };
    case 'add_column_to_right':
      const rightIndex = state.columns.findIndex((column) => column.id === action.columnId);
      const rightId = shortId();
      return {
        ...state,
        skipReset: true,
        columns: [
          ...state.columns.slice(0, rightIndex + 1),
          {
            id: rightId,
            label: 'Column',
            accessor: rightId,
            dataType: 'text',
            created: action.focus && true,
            options: [],
          },
          ...state.columns.slice(rightIndex + 1, state.columns.length),
        ],
      };
    case 'delete_column':
      const deleteIndex = state.columns.findIndex((column) => column.id === action.columnId);
      return {
        ...state,
        skipReset: true,
        columns: [
          ...state.columns.slice(0, deleteIndex),
          ...state.columns.slice(deleteIndex + 1, state.columns.length),
        ],
      };
    case 'enable_reset':
      return {
        ...state,
        skipReset: false,
      };
    default:
      return state;
  }
}

export default function AddDeleteTable({ type }) {
  // state.columns는 존재함. skipReset은 false임
  // 그런데 Makedata 가 api 호출해서 데이터 불러오기전에 여기가 먼저 읽혀버림.
  // 따라서 지금 방식으로는 state.data가 존재하지 않
  // useSelector로 state.data 받아오기

  const [state, dispatch] = useReducer(reducer, makeData(type));
  const { onChangeTableData, onChangeEquipmentObject, onChangeEquipmentTube } = useTableAction();

  // // switch (state.data[0].ID) {
  // //   case 'equipmentObject':
  // //     console.log('object');
  // //     onChangeTableData(state.data);
  // //   case 'equipmentTube':
  // //     console.log('tuve');
  // // }

  useEffect(() => {
    dispatch({ type: 'enable_reset' });
    if (state.data[0].ID === 'equipmentObject') {
      onChangeEquipmentObject(state.data);
    } else if (state.data[0].ID === 'equipmentTube') {
      onChangeEquipmentTube(state.data);
    }
  }, [state.data, state.columns]);

  return (
    <div
      style={{
        width: '47vw',
        height: '35vh',
        overflowX: 'hidden',
      }}
    >
      {/* <div
        style={{
          // height: 120,
          // display: 'flex',
          alignItems: 'left',
          justifyContent: 'left',
          flexDirection: 'column',
        }}
      >
        <h3 style={{ color: grey(800) }}>Object Specification</h3>
      </div> */}
      <div style={{ overflow: 'auto', display: 'flex' }}>
        <div
          style={{
            flex: '1 1 auto',
            padding: '1rem',
            maxWidth: 1000,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <Table columns={state.columns} data={state.data} dispatch={dispatch} skipReset={state.skipReset} />
        </div>
      </div>
    </div>
  );
}