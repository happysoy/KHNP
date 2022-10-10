import { createContext, useCallback, useState } from 'react';

const AxisStateContext = createContext();

function AxisStateProvider({ children }) {
  const [graphData, setGraphData] = useState([]);
  const onChangeGraphData = useCallback((data) => {
    setGraphData(data);
  }, []);
  const [range, setRange] = useState([]);

  const onChangeRange = useCallback((eventdata, data) => {
    const start = Math.floor(eventdata['xaxis.range[0]']);
    const end = Math.floor(eventdata['xaxis.range[1]']);
    let selectRange = data[0].y.slice(start, end);
    let max = Math.max(...selectRange);

    let min = Math.min(...selectRange);
    console.log('최대', max, '최소', min);
    // console.log(Math.min(...data[0].y))
    setRange([start, end, max, min]);
  }, []);

  return (
    <AxisStateContext.Provider
      value={{
        graphData,
        range,
        onChangeRange,
        onChangeGraphData,
      }}
    >
      {children}
    </AxisStateContext.Provider>
  );
}

export { AxisStateContext, AxisStateProvider };
