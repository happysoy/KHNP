import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from '../../../redux/store';
import useAxis from 'src/hooks/useAxis';
import { getGraphDatas, postGraphDatas } from 'src/redux/slices/data';
// redux

export default function SmallGraph3() {
  const blank = {};
  const { graphDatas, isLoading } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGraphDatas());
  }, [dispatch]);

  const ref = useRef(null);
  const range = useAxis();

  useEffect(() => {
    console.log('current range', range);
    const myDiv = ref.current;
    if (graphDatas.length === 0) {
      return;
    }
    const trace1 = {
      x: Object.values(graphDatas['CH3X']),
      y: Object.values(graphDatas['CH3Y']),
    };
    let data = [trace1];

    const layout = {
      title: 'CH3',
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

    let startValue = Object(graphDatas['CH3X'][range[0]]);
    let endValue = Object(graphDatas['CH3X'][range[1]]);

    let stringifyXvalue = JSON.stringify(startValue);
    let stringifyYvalue = JSON.stringify(endValue);

    let update = {
      'xaxis.range': [stringifyXvalue, stringifyYvalue],
    };

    Plotly.relayout(myDiv, update);
  }, [range, graphDatas]);

  return (
    <>
      <div ref={ref} id="myDiv"></div>
      <script></script>
    </>
  );
}
