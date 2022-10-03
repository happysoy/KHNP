import PropTypes from 'prop-types';
import merge from 'lodash/merge';
// @mui
import { makeStyles } from '@mui/styles';
import { useTheme, styled } from '@mui/material/styles';
import {
  Box,
  Card,
  CardHeader,
  Divider,
  Stack,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { Fragment } from 'react';
import { useSelector } from 'src/redux/store';

// ----------------------------------------------------------------------
const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
  {
    id: 'population',
    label: 'Population',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Density',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

// ----------------------------------------------------------------------

export default function EvaluationSummary({ title, description, ...other }) {
  const theme = useTheme();
  const { savedDatasECT } = useSelector((state) => state.testInformation);

  let parseECT;
  if (savedDatasECT.length !== 0) {
    parseECT = JSON.parse(savedDatasECT[0]?.jdoc);
  }

  const useStyles = makeStyles({
    tableCell: {
      borderLeft: `1px solid ${theme.palette.divider}`,
      borderBottom: `1px solid ${theme.palette.divider}`,
      textAlign: 'center',
      // '&:first-of-type': {
      //   borderLeft: 'none',
      // },
    },
    tableRowPrimary: {
      borderTop: `5px double ${theme.palette.divider}`,
      textAlign: 'center',
    },
  });

  const classes = useStyles();

  const {
    equipmentData: {
      equipmentTube: { columns, data },
    },
  } = parseECT;

  const columnID = Object.keys(data[0])[2];

  const sample = [
    {
      name: '지시분포',
      detail: [
        { name: 'Plugged Tube', num: data[1][columnID] },
        { name: 'No Tube', num: data[2][columnID] },
      ],
    },
  ];

  return (
    <Card {...other}>
      <CardHeader title={title} sx={{ mb: 5 }} />
      <Paper sx={{ width: '100%' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableCell} rowSpan={1} colSpan={2}>
                Box No.
              </TableCell>
              <TableCell className={classes.tableCell} rowSpan={1} colSpan={1}>
                {columns[1].label}
              </TableCell>
            </TableRow>

            {/* <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} align={column.align} style={{ top: 57, minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow> */}
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell className={classes.tableCell} colSpan={2}>
                검사수량
              </TableCell>
              <TableCell className={classes.tableCell}>{data[3][columnID]}</TableCell>
            </TableRow>
            {sample.map((item, index) => (
              <>
                <TableRow key={item.name}>
                  <TableCell className={classes.tableCell} rowSpan={item.detail.length + 1}>
                    {item.name}
                  </TableCell>
                </TableRow>
                {item.detail.map((detail, index) => (
                  <TableRow>
                    <TableCell className={classes.tableCell}>{detail.name}</TableCell>
                    <TableCell className={classes.tableCell}>{detail.num}</TableCell>
                  </TableRow>
                ))}
                {/* {item.detail.map((detail, index) => (
                  <TableRow key={index}>
                    <TableCell className={classes.tableCell}>{detail}</TableCell>
                  </TableRow>
                ))} */}
              </>
            ))}
            <TableRow className={classes.tableRowPrimary}>
              <TableCell className={classes.tableCell} colSpan={2}>
                합계
              </TableCell>
              <TableCell className={classes.tableCell}>{data[0][columnID]}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </Card>
  );
}
