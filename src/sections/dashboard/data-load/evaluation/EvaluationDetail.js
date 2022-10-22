import PropTypes from 'prop-types';
import merge from 'lodash/merge';
// @mui
import { useTheme, styled } from '@mui/material/styles';
import { Box, Card, CardHeader, Divider, Stack, Typography } from '@mui/material';
// utils
import { fNumber } from '../../../../utils/formatNumber';
// components
import ReactApexChart, { BaseOptionChart } from '../../../../components/chart';

// ----------------------------------------------------------------------

const CHART_HEIGHT = 372;
const LEGEND_HEIGHT = 72;

const ChartWrapperStyle = styled('div')(({ theme }) => ({
  height: CHART_HEIGHT,
  marginTop: theme.spacing(5),
  '& .apexcharts-canvas svg': { height: CHART_HEIGHT },
  '& .apexcharts-canvas svg,.apexcharts-canvas foreignObject': {
    overflow: 'visible',
  },
  '& .apexcharts-legend': {
    height: LEGEND_HEIGHT,
    alignContent: 'center',
    position: 'relative !important',
    borderTop: `solid 1px ${theme.palette.divider}`,
    top: `calc(${CHART_HEIGHT - LEGEND_HEIGHT}px) !important`,
  },
}));

// ----------------------------------------------------------------------

export default function EvaluationDetail({ title, description, parseECT, ...other }) {
  const theme = useTheme();

  // for (let i = 0; i < chartContents.length; i++) {
  //   for (let j = 0; j < chartContents[i].length; j++) {
  //     console.log(chartContents[i][j].id);
  //   }
  // }
  console.log(parseECT);
  // const {
  //   equipmentData: {
  //     equipmentTube: { columns, data },
  //   },
  // } = parseECT;
  const {
    equipmentData: {
      equipmentObject,
      equipmentTube: { data },
    },
  } = parseECT;
  const columnID = Object.keys(data[0])[2];

  return (
    <Card {...other}>
      <Stack direction="row" divider={<Divider orientation="vertical" flexItem />}>
        <Box sx={{ py: 2, width: 1, textAlign: 'center' }}>
          <Typography sx={{ mb: 1, typography: 'body2', color: 'text.secondary' }}>Object</Typography>
          <Typography sx={{ typography: 'h4' }}>{equipmentObject[0].사양}</Typography>
        </Box>
        <Box sx={{ py: 2, width: 1, textAlign: 'center' }}>
          <Typography sx={{ mb: 1, typography: 'body2', color: 'text.secondary' }}>전체 수량</Typography>
          <Typography sx={{ typography: 'h4' }}>{data[0][columnID]}</Typography>
        </Box>
      </Stack>
      <Divider />
      <Stack direction="row" divider={<Divider orientation="vertical" flexItem />}>
        <Box sx={{ py: 2, width: 1, textAlign: 'center' }}>
          <Typography sx={{ mb: 1, typography: 'body2', color: 'text.secondary' }}>Date</Typography>
          <Typography sx={{ typography: 'h4' }}>2022.09.27</Typography>
        </Box>
        <Box sx={{ py: 2, width: 1, textAlign: 'center' }}>
          <Typography sx={{ mb: 1, typography: 'body2', color: 'text.secondary' }}>검사 수량</Typography>
          <Typography sx={{ typography: 'h4' }}>{data[3][columnID]}</Typography>
        </Box>
      </Stack>
    </Card>
  );
}
