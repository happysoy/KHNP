import { useContext } from 'react';
import { AxisStateContext } from 'src/contexts/AxisStateContext';

export default function useGraphAction() {
  const { onChangeRange } = useContext(AxisStateContext);
  return { onChangeRange };
}
