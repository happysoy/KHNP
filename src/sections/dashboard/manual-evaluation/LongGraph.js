// /* eslint no-undef: "error" */
// // import * as d3 from 'd3';
// /* global Plotly */
// import { useEffect, useRef, useState } from 'react';
// import dynamic from 'next/dynamic';
// // const Plotly = require('react-plotly.js').default;
// // const Plotly = dynamic(() => import('plotly.js-dist-min'), { ssr: false });

import { useEffect } from 'react';

// export default function LongGraph() {
//   const ref = useRef(null);

//   var rawDataURL = 'https://raw.githubusercontent.com/plotly/datasets/master/2016-weather-data-seattle.csv';
//   var xField = 'Date';
//   var yField = 'Mean_TemperatureC';

//   var selectorOptions = {
//     buttons: [

//         step: 'month',
//         stepmode: 'backward',
//         count: 1,
//         label: '1m',
//       },
//       {
//         step: 'month',
//         stepmode: 'backward',
//         count: 6,
//         label: '6m',
//       },
//       {
//         step: 'year',
//         stepmode: 'todate',
//         count: 1,
//         label: 'YTD',
//       },
//       {
//         step: 'year',
//         stepmode: 'backward',
//         count: 1,
//         label: '1y',
//       },
//       {
//         step: 'all',
//       },
//     ],
//   };

//   useEffect(() => {
//     Plotly.d3.csv(rawDataURL, function (err, rawData) {
//       if (err) throw err;

//       var data = prepData(rawData);
//       var layout = {
//         width: 1200,
//         height: 500,
//         title: 'Time series with range slider and selectors',
//         xaxis: {
//           rangeselector: selectorOptions,
//           rangeslider: {},
//         },
//         yaxis: {
//           fixedrange: true,
//         },
//         hovermode: 'closest',
//       };

//       Plotly.newPlot('graph', data, layout, { showSendToCloud: true });

//       Plotly.relayout('graph', 'xaxis.range[0]');
//     });
//   });

//   // useEffect(() => {
//   //   const el2 = ref.current;
//   //   console.log(el2);
//   //   el2.on((event) => console.log(event));
//   //   // el2.on('plotly_click', function (data) {
//   //   //   console.log(data);
//   //   // });
//   //   // // const el = document.querySelector('#graph');
//   //   // // console.log(el);
//   //   // Plotly.relayout(el2, {

//   //   // }
//   //   // );
//   //   // el2.on('plotly_relayout', function (eventdata) {
//   //   //   console.log(eventdata);
//   //   // });
//   // }, []);

//   function prepData(rawData) {
//     var x = [];
//     var y = [];

//     rawData.forEach(function (datum, i) {
//       if (i % 100) return;

//       x.push(new Date(datum[xField]));
//       y.push(datum[yField]);
//     });

//     return [
//       {
//         mode: 'lines',
//         x: x,
//         y: y,
//       },
//     ];
//   }

//   return (
//     <div>
//       <div ref={ref} id="graph">
//         {' '}
//       </div>
//     </div>
//   );
// }

export default function LongGraph() {
  useEffect(() => {
    var myDiv = document.getElementById('myDiv');

    var d3 = Plotly.d3,
      N = 40,
      x = d3.range(N),
      y = d3.range(N).map(d3.random.normal()),
      data = [{ x: x, y: y }];
    var layout = { title: 'Click-drag to zoom' };

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

  return (
    <>
      <div id="myDiv"></div>
      <script></script>
    </>
  );
}
