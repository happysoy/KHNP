import PropTypes from 'prop-types';
import merge from 'lodash/merge';
import { useEffect, useRef, useState } from 'react';
// @mui
import { Card, CardHeader, Box, TextField } from '@mui/material';
// redux
import { useDispatch, useSelector } from 'src/redux/store';
// hooks
import useGraphAction from 'src/hooks/useGraphActions';
import { startDrawing, doneDrawing } from 'src/redux/slices/data';
import { useTheme } from '@mui/material/styles';
import { makeStyles, styled } from '@mui/styles';
import useAxis from 'src/hooks/useAxis';

// ----------------------------------------------------------------------
//
StandardCloneLissajous.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  chartData: PropTypes.array.isRequired,
  // chartLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default function StandardCloneLissajous({ chartLabels, selectSeries, defectList, chartData, ...other }) {
  const [seriesData, setSeriesData] = useState(selectSeries);
  const dispatch = useDispatch();
  const ref = useRef(null);
  const range = useAxis();
  const { onChangeRange } = useGraphAction();
  const { errorDatas, graphDatas, isLoading, drawLoading } = useSelector((state) => state.data);

  const handleChangeSeriesData = (event) => {
    setSeriesData(event.target.value);
  };

  useEffect(() => {
    const myDiv = ref.current;
    if (graphDatas.length === 0) {
      return;
    }
    const config = {
      displayModeBar: false, // hides the bar.
    };

    const layout = {
      title: `defect location of ${seriesData}`,
      width: 500,
      height: 500,
      yaxis: {
        fixedrange: true,
        showticklabels: false,
        range: [range[3] - 1000, range[2] + 1000],
      },
      xaxis: {
        showticklabels: false,
      },

      shapes: [
        {
          type: 'rect',
          x0: defectList[0],
          y0: -40000,
          x1: defectList[1],
          y1: 40000,
          fillcolor: 'rgba(255, 140, 184, 0.5)',
          opacity: 0.5,
          line: {
            width: 5,
            color: 'rgba(255, 140, 184, 0.5)',
          },
        },

        //Filled Rectangle
      ],
    };
    const trace1 = {
      x: Object.keys(graphDatas[seriesData]),

      y: Object.values(graphDatas[seriesData]),
      hoverinfo: 'none',
    };
    const data = [trace1];
    Plotly.newPlot(myDiv, data, layout, config);
    let update = {
      'xaxis.range': [range[0], range[1]],
      // 'yaxis.range': [range[3] - 1000, range[2] + 1000],
    };

    if (!isNaN(range[0]) && range[0] !== undefined) {
      Plotly.relayout(myDiv, update);
    }
    dispatch(doneDrawing());
  }, [range, graphDatas, seriesData]);

  // console.log('draw', drawLoading);

  return (
    <>
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
    </>
  );
}
