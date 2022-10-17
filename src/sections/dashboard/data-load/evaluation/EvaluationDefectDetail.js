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
import { useState, useEffect } from 'react';
import { useSelector } from 'src/redux/store';
import Label from 'src/components/Label';
import Scrollbar from 'src/components/Scrollbar';

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

export default function EvaluationDefectDetail({ title, description, ...other }) {
  const theme = useTheme();
  // const { datas } = useSelector((state) => state.data);

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
  const { errorDatas, isLoading } = useSelector((state) => state.data);

  const classes = useStyles();

  // const {
  //   equipmentData: {
  //     equipmentTube: { columns, data },
  //   },
  // } = parseECT;
  const [tableData, setTableData] = useState([]);

  return (
    <Card {...other}>
      <CardHeader title={title} sx={{ mb: 5 }} />
      <Paper sx={{ width: '100%' }}>
        <Scrollbar>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell className={classes.tableCell} rowSpan={2} colSpan={1}>
                    순번
                  </TableCell>
                  <TableCell className={classes.tableCell} rowSpan={1} colSpan={1}>
                    Tube Location
                  </TableCell>
                  <TableCell className={classes.tableCell} rowSpan={1} colSpan={5}>
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
                    Deg
                  </TableCell>
                  <TableCell className={classes.tableCell} rowSpan={1} colSpan={1}>
                    Depth
                  </TableCell>
                  <TableCell className={classes.tableCell} rowSpan={1} colSpan={1}>
                    Location
                  </TableCell>
                  <TableCell className={classes.tableCell} rowSpan={1} colSpan={1}>
                    Eval.
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* <TableRow>
                  <TableCell>야호</TableCell>
                </TableRow> */}
                {errorDatas.map((item, index) => (
                  <>
                    <TableRow key={index}>
                      <TableCell key={index} className={classes.tableCell}>
                        {index + 1}
                      </TableCell>
                      <TableCell key={index} className={classes.tableCell}>
                        {item.pns}
                      </TableCell>
                      <TableCell className={classes.tableCell}>?</TableCell>
                      <TableCell className={classes.tableCell}>?</TableCell>
                      <TableCell className={classes.tableCell}>
                        <Label variant="ghost" color="error">
                          {item.DEFECT_CODE}
                        </Label>
                      </TableCell>
                      <TableCell className={classes.tableCell}>?</TableCell>
                      <TableCell className={classes.tableCell}>?</TableCell>
                    </TableRow>
                  </>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>
      </Paper>
    </Card>
  );
}
