// // import * as d3 from "d3";
// // import { useEffect } from "react";

// // let myData = null;
// // export default function MyData() {
// //   useEffect(() => {
// //     d3.csv(
// //       "https://raw.githubusercontent.com/plotly/datasets/master/finance-charts-apple.csv",
// //       function (error, rows) {
// //         return rows;
// //       }
// //     );
// //   }, []);
// //   return (
// //     <div>
// //       <div id="map"></div>
// //     </div>
// //   );
// //   // return myData;
// // }
// function makeplot() {
//   Plotly.d3.csv(
//     "https://raw.githubusercontent.com/plotly/datasets/master/2014_apple_stock.csv",
//     function (data) {
//       processData(data);
//     }
//   );
// }

// function processData(allRows) {
//   console.log(allRows);
//   var x = [],
//     y = [],
//     standard_deviation = [];

//   for (var i = 0; i < allRows.length; i++) {
//     row = allRows[i];
//     x.push(row["AAPL_x"]);
//     y.push(row["AAPL_y"]);
//   }
//   console.log("X", x, "Y", y, "SD", standard_deviation);
//   makePlotly(x, y, standard_deviation);
// }

// function makePlotly(x, y, standard_deviation) {
//   // var plotDiv = document.getElementById("plot");
//   var traces = [
//     {
//       x: x,
//       y: y,
//     },
//   ];

//   Plotly.newPlot("myDiv", traces, {
//     title: "Plotting CSV data from AJAX call",
//   });
// }
// makeplot();
