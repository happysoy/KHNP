import PropTypes from 'prop-types';
import merge from 'lodash/merge';
// @mui
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
const sample = [
  { name: 'apple', detail: ['a', 'b', 'c', 'd'] },
  { name: 'banana', detail: ['a', 'b'] },
];

// ----------------------------------------------------------------------

export default function EvaluationSummary({ title, description, ...other }) {
  const theme = useTheme();

  return (
    <Card {...other}>
      <CardHeader title={title} sx={{ mb: 5 }} />
      <Paper sx={{ width: '100%' }}>
        <Table sx={{ minWidth: 700 }}>
          <TableHead>
            <TableRow>
              <TableCell colSpan={2}>Fruit</TableCell>
              <TableCell colSpan={3}>Buyers</TableCell>
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
            {sample.map((item, index) => (
              <>
                <TableRow key={item.name}>
                  <TableCell rowSpan={item.detail.length + 1}>{item.name}</TableCell>
                </TableRow>
                {item.detail.map((detail, index) => (
                  <TableRow key={index}>
                    <TableCell>{detail}</TableCell>
                  </TableRow>
                ))}
              </>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Card>
  );
}
