import * as d3 from "d3";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
// const Plotly = dynamic(() => import("plotly.js-dist-min"), { ssr: false });

export default function PlotlyComponent() {
  var rawDataURL =
    "https://raw.githubusercontent.com/plotly/datasets/master/2016-weather-data-seattle.csv";
  var xField = "Date";
  var yField = "Mean_TemperatureC";

  var selectorOptions = {
    buttons: [
      {
        step: "month",
        stepmode: "backward",
        count: 1,
        label: "1m",
      },
      {
        step: "month",
        stepmode: "backward",
        count: 6,
        label: "6m",
      },
      {
        step: "year",
        stepmode: "todate",
        count: 1,
        label: "YTD",
      },
      {
        step: "year",
        stepmode: "backward",
        count: 1,
        label: "1y",
      },
      {
        step: "all",
      },
    ],
  };

  useEffect(() => {
    Plotly.d3.csv(rawDataURL, function (err, rawData) {
      if (err) throw err;

      var data = prepData(rawData);
      var layout = {
        title: "Time series with range slider and selectors",
        xaxis: {
          rangeselector: selectorOptions,
          rangeslider: {},
        },
        yaxis: {
          fixedrange: true,
        },
      };

      Plotly.newPlot("graph", data, layout, { showSendToCloud: true });
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
        mode: "lines",
        x: x,
        y: y,
      },
    ];
  }

  var trace0 = {
    x: [0, 1, 2, 3],
    y: [1, 2, 4, 8],
    name: "chart 1",
    xaxis: "x1",
    yaxis: "y1",
  };

  var trace1 = {
    x: [0, 1, 2, 3],
    y: [1, 2, 4, 8],
    name: "chart 3",
    yaxis: "y2",
    xaxis: "x",
  };

  var trace2 = {
    x: [0, 1, 2, 3],
    y: [1, 2, 4, 8],
    name: "chart 5",
    yaxis: "y3",
    xaxis: "x2",
  };

  var trace3 = {
    x: [0, 1, 2, 3],
    y: [1, 2, 4, 8],
    name: "chart 7",
    yaxis: "y4",
    xaxis: "x2",
  };

  var long_trace = {
    yaxis: "y5",
    xaxis: "x3",
    x: [
      "2000-01-01",
      "2000-01-02",
      "2000-01-03",
      "2000-01-04",
      "2000-01-05",
      "2000-01-06",
      "2000-01-07",
      "2000-01-08",
      "2000-01-09",
      "2000-01-10",
      "2000-01-11",
      "2000-01-12",
      "2000-01-13",
      "2000-01-14",
      "2000-01-15",
      "2000-01-16",
      "2000-01-17",
      "2000-01-18",
      "2000-01-19",
      "2000-01-20",
      "2000-01-21",
      "2000-01-22",
      "2000-01-23",
      "2000-01-24",
      "2000-01-25",
      "2000-01-26",
      "2000-01-27",
      "2000-01-28",
      "2000-01-29",
      "2000-01-30",
      "2000-01-31",
    ],
    y: [
      4.3, 8.2, 4.1, 5.6, -3, -0.2, 0.3, 0.4, 4.1, 5, 4.6, -0.2, -8.5, -9.1,
      -2.7, -2.7, -17, -11.3, -5.5, -6.5, -16.9, -12, -6.1, -6.6, -7.9, -10.8,
      -14.8, -11, -4.4, -1.3, -1.1,
    ],
    mode: "lines",
    type: "scatter",
  };

  var data = [trace0, trace1, trace2, trace3, long_trace];

  var layout = {
    width: 1200,
    height: 800,
    title: "Lissajous Chart",
    xaxis: {
      domain: [0.1, 0.45],
    },
    yaxis: {
      scaleanchor: "y",
      domain: [0.45, 0.7],
    },
    yaxis2: {
      scaleanchor: "y",
      side: "left",
      // overlaying: "y",
      domain: [0.8, 1], // 1,2,3,4 분면 영역 결정
    },

    xaxis2: {
      domain: [0.55, 0.9],
    },
    yaxis3: {
      scaleanchor: "y", // 기준이 되는 anchor
      anchor: "free",
      position: 0.55,
      domain: [0.45, 0.7],
    },
    yaxis4: {
      scaleanchor: "y",
      anchor: "free",
      position: 0.55,
      domain: [0.8, 1],
    },

    showlegend: true,

    xaxis3: {
      type: "date",
      domain: [0, 1],
      anchor: "y5",
      title: {
        text: "2nd defect location of CH1Y",
      },
    },
    yaxis5: {
      scaleanchor: "y",
      domain: [0, 0.3],
    },
  };

  //

  useEffect(() => {
    Plotly.newPlot("lissajous_chart", data, layout);
  }, []);

  return (
    <div>
      <div id="lissajous_chart"></div>
      <div id="graph"></div>
    </div>
  );
}
