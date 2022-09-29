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
import Label from 'src/components/Label';

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

export default function EvaluationDefectDetail({ title, parseECT, description, ...other }) {
  const theme = useTheme();
  const { datas } = useSelector((state) => state.data);

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

  const sample = [{ num: [0, 1, 2] }, { num: [0, 1, 2] }];

  return (
    <Card {...other}>
      <CardHeader title={title} sx={{ mb: 5 }} />
      <Paper sx={{ width: '100%' }}>
        <Table sx={{ minWidth: 700 }}>
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableCell} rowSpan={2} colSpan={1}>
                순번
              </TableCell>
              <TableCell className={classes.tableCell} rowSpan={1} colSpan={1}>
                PNS
              </TableCell>
              <TableCell className={classes.tableCell} rowSpan={1} colSpan={3}>
                2차 OH
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.tableCell} rowSpan={1} colSpan={1}>
                Box-Zone-Row-Col
              </TableCell>
              <TableCell className={classes.tableCell} rowSpan={1} colSpan={1}>
                Volts
              </TableCell>
              <TableCell className={classes.tableCell} rowSpan={1} colSpan={1}>
                Depth
              </TableCell>
              <TableCell className={classes.tableCell} rowSpan={1} colSpan={1}>
                Eval.
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {datas.map((item, index) => (
              <>
                <TableRow key={index}>
                  <TableCell key={index} className={classes.tableCell}>
                    {index + 1}
                  </TableCell>
                  <TableCell key={index} className={classes.tableCell}>
                    {item.fileName}
                  </TableCell>

                  <TableCell className={classes.tableCell}>0</TableCell>
                  <TableCell className={classes.tableCell}>0</TableCell>

                  <TableCell className={classes.tableCell}>
                    <Label variant="ghost" color="error">
                      DFI
                    </Label>
                  </TableCell>
                </TableRow>
              </>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Card>
  );
}
