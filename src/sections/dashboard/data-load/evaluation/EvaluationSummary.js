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
import { Fragment, useEffect } from 'react';
import { useSelector } from 'src/redux/store';

import EvaluationTable from './EvaluationTable';

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

export default function EvaluationSummary({ title, description, parseECT, ...other }) {
  const theme = useTheme();
  // console.log('savedDatasECT', savedDatasECT);
  // let parseECT;
  // if (savedDatasECT.length !== 0) {
  //   parseECT = JSON.parse(savedDatasECT[0]?.jdoc);
  // }
  // console.log(parseECT);
  return (
    <>
      <Card {...other}>
        <CardHeader title={title} sx={{ mb: 5 }} />
        <Paper sx={{ width: '100%' }}>
          <EvaluationTable parseECT={parseECT} />
        </Paper>
      </Card>
    </>
  );
}
