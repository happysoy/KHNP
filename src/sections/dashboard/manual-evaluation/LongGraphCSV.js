// /* eslint no-undef: "error" */
// // import * as d3 from 'd3';
// /* global Plotly */
// import { useEffect, useRef, useState } from 'react';
// import dynamic from 'next/dynamic';
// // const Plotly = require('react-plotly.js').default;
// // const Plotly = dynamic(() => import('plotly.js-dist-min'), { ssr: false });

import { useEffect, useRef } from 'react';

export default function LongGraph() {
  const ref = useRef(null);
  useEffect(() => {
    const myDiv = ref.current;
    // var myDiv = document.getElementById('myDiv');

    // const rawDataURL = `https://khnp.s3.ap-northeast-2.amazonaws.com/real_data.csv`;
    const rawDataURL = 'https://raw.githubusercontent.com/plotly/datasets/master/2016-weather-data-seattle.csv';

    const xField = 'Date';
    const yField = 'Mean_TemperatureC';

    Plotly.d3.csv(rawDataURL, function (err, rawData) {
      if (err) throw err;

      const data = prepData(rawData);
      const layout = {
        width: 1200,
        height: 500,
        yaxis: {
          fixedrange: true,
        },
      };

      Plotly.newPlot(myDiv, data, layout, { showSendToCloud: true });

      myDiv.on('plotly_relayout', function (eventdata) {
        alert(
          'ZOOM!' +
            '\n\n' +
            'Event data:' +
            '\n' +
            JSON.stringify(eventdata) +
            '\n\n' +
            'x-axis start:' +
            eventdata['xaxis.range[0]'] +
            '\n' +
            'x-axis end:' +
            eventdata['xaxis.range[1]']
        );
      });
    });
    function prepData(rawData) {
      var x = [];
      var y = [];

      rawData.forEach(function (datum, i) {
        if (i % 100) return;

        x.push(new Date(datum[xField]));
        y.push(datum[yField]);
      });

      return [
        {
          mode: 'lines',
          x: x,
          y: y,
        },
      ];
    }
  }, []);

  return (
    <>
      <div ref={ref} id="myDiv"></div>
      <script></script>
    </>
  );
}
