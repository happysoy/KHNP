import { useContext } from 'react';
import { AxisStateContext } from 'src/contexts/AxisStateContext';

export default function useGraphAction() {
  const { onChangeRange } = useContext(AxisStateContext);
  const { onChangeGraphData } = useContext(AxisStateContext);
  return { onChangeRange, onChangeGraphData };
}
