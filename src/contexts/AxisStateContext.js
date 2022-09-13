import { createContext, useCallback, useState } from 'react';

const AxisStateContext = createContext();

function AxisStateProvider({ children }) {
  const [graphData, setGraphData] = useState([]);
  const onChangeGraphData = useCallback((data) => {
    setGraphData(data);
  }, []);
  const [range, setRange] = useState([]);

  const onChangeRange = useCallback((eventdata) => {
    const start = Math.floor(eventdata['xaxis.range[0]']);
    const end = Math.floor(eventdata['xaxis.range[1]']);
    setRange([start, end]);
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
