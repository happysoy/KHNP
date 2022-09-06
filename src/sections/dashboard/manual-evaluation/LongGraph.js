// /* eslint no-undef: "error" */
// // import * as d3 from 'd3';
// /* global Plotly */
// import { useEffect, useRef, useState } from 'react';
// import dynamic from 'next/dynamic';
// // const Plotly = require('react-plotly.js').default;
// // const Plotly = dynamic(() => import('plotly.js-dist-min'), { ssr: false });
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from '../../../redux/store';
import useGraphAction from 'src/hooks/useGraphActions';
import { getDatas, getGraphDatas } from 'src/redux/slices/data';

export default function LongGraph() {
  const ref = useRef(null);

  const { onChangeRange } = useGraphAction();

  const { graphDatas, isLoading } = useSelector((state) => state.data);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGraphDatas());
  }, [dispatch]);

  useEffect(() => {
    const myDiv = ref.current;
    if (graphDatas.length === 0) {
      return;
    }
    const trace1 = {
      x: Object.keys(graphDatas['CH1X']),

      y: Object.values(graphDatas['CH1X']),
    };
    const data = [trace1];
    const layout = {
      title: 'defect location of CH1X',
      width: 1000,
      height: 300,
      yaxis: {
        fixedrange: true,
      },
    };

    Plotly.newPlot(myDiv, data, layout, { showSendToCloud: true });

    myDiv.on('plotly_relayout', function (eventdata) {
      onChangeRange(eventdata);
    });
  }, [graphDatas]);

  return (
    <>
      <div ref={ref} id="myDiv"></div>
    </>
  );
}
