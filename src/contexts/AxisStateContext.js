import { createContext, useCallback, useState } from 'react';

const AxisStateContext = createContext();

function AxisStateProvider({ children }) {
  const [range, setRange] = useState([]);
  const onChangeRange = useCallback((eventdata) => {
    const start = Math.floor(eventdata['xaxis.range[0]']);
    const end = Math.floor(eventdata['xaxis.range[1]']);
    setRange([start, end]);
  }, []);

  return (
    <AxisStateContext.Provider
      value={{
        range,
        onChangeRange,
      }}
    >
      {children}
    </AxisStateContext.Provider>
  );
}

export { AxisStateContext, AxisStateProvider };
