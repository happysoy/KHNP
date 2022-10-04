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

// ----------------------------------------------------------------------
//
StandardLissajous.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  chartData: PropTypes.array.isRequired,
  // chartLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default function StandardLissajous({ chartLabels, chartData, ...other }) {
  const [seriesData, setSeriesData] = useState('CH1X');
  const dispatch = useDispatch();
  const ref = useRef(null);
  const { onChangeRange } = useGraphAction();
  const { graphDatas, isLoading, drawLoading } = useSelector((state) => state.data);

  const handleChangeSeriesData = (event) => {
    setSeriesData(event.target.value);
  };

  useEffect(() => {
    const myDiv = ref.current;
    if (graphDatas.length === 0) {
      return;
    }
    const trace1 = {
      x: Object.keys(graphDatas[seriesData]),

      y: Object.values(graphDatas[seriesData]),
    };
    const data = [trace1];
    const layout = {
      title: `defect location of ${seriesData}`,
      width: 1100,
      height: 300,
      yaxis: {
        fixedrange: true,
      },
    };
    const config = {
      displayModeBar: false, // hides the bar.
    };

    Plotly.newPlot(myDiv, data, layout, config);
    // { showSendToCloud: true }
    myDiv.on('plotly_relayout', function (eventdata) {
      onChangeRange(eventdata);
    });
    dispatch(doneDrawing());
  }, [graphDatas, seriesData]);

  console.log('draw', drawLoading);

  return (
    <Card {...other}>
      {drawLoading ? (
        <h1>로딩중입니다</h1>
      ) : (
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
      )}
      <div ref={ref} id="myDiv"></div>
    </Card>
  );
}
