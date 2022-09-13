import PropTypes from 'prop-types';
import merge from 'lodash/merge';
import { useEffect, useRef, useState } from 'react';
// @mui
import { Card, CardHeader, Box, TextField } from '@mui/material';
// redux
import { useDispatch, useSelector } from 'src/redux/store';
import { getGraphDatas } from 'src/redux/slices/data';
// hooks
import useGraphAction from 'src/hooks/useGraphActions';
import useAxis from 'src/hooks/useAxis';

// ----------------------------------------------------------------------
//
ChannelLissajous.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  chartData: PropTypes.array.isRequired,
  // chartLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default function ChannelLissajous({ chartLabels, chartData, ...other }) {
  const [seriesData, setSeriesData] = useState('CH1');

  const ref = useRef(null);
  const range = useAxis();
  const blank = {};

  const { onChangeRange } = useGraphAction();
  const { graphDatas, isLoading } = useSelector((state) => state.data);

  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getGraphDatas());
  // }, [dispatch]);

  // console.log(graphDatas);

  const handleChangeSeriesData = (event) => {
    setSeriesData(event.target.value);
  };

  useEffect(() => {
    const myDiv = ref.current;
    if (graphDatas.length === 0) {
      return;
    }
    const parseToGraphDatas = JSON.parse(graphDatas);
    const trace1 = {
      x: Object.values(parseToGraphDatas[`${seriesData}X`]),

      y: Object.values(parseToGraphDatas[`${seriesData}Y`]),
    };
    let data = [trace1];
    const layout = {
      // title: `${seriesData}`,
      width: 500,
      height: 300,
      yaxis: {
        fixedrange: true,
      },
    };
    const config = {
      displayModeBar: false, // hides the bar.
    };
    if (isNaN(range[0]) || range[0] === undefined) {
      data = [blank];
      Plotly.newPlot(myDiv, data, layout, config);
      return;
    }

    Plotly.newPlot(myDiv, data, layout, config);
    // { showSendToCloud: true }
    let startValue = Object(parseToGraphDatas[`${seriesData}X`][range[0]]);
    let endValue = Object(parseToGraphDatas[`${seriesData}X`][range[1]]);

    let stringifyXvalue = JSON.stringify(startValue);
    let stringifyYvalue = JSON.stringify(endValue);

    let update = {
      'xaxis.range': [stringifyXvalue, stringifyYvalue],
    };

    Plotly.relayout(myDiv, update);
  }, [range, graphDatas, seriesData]);

  return (
    <Card {...other}>
      <CardHeader
        action={
          <TextField
            select
            fullWidth
            value={seriesData}
            SelectProps={{ native: true }}
            onChange={handleChangeSeriesData}
            sx={{
              '& fieldset': { border: '0 !important' },
              '& select': {
                pl: 1,
                py: 0.5,
                pr: '24px !important',
                typography: 'subtitle2',
              },
              '& .MuiOutlinedInput-root': {
                borderRadius: 0.75,
                bgcolor: 'background.neutral',
              },
              '& .MuiNativeSelect-icon': {
                top: 4,
                right: 0,
                width: 20,
                height: 20,
              },
            }}
          >
            {chartData.map((option) => (
              <option key={option.year} value={option.year}>
                {option.year}
              </option>
            ))}
          </TextField>
        }
      />
      <div ref={ref} id="myDiv"></div>
    </Card>
  );
}
