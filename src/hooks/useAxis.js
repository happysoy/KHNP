import { useContext } from 'react';
import { AxisStateContext } from 'src/contexts/AxisStateContext';

export default function useAxis() {
  const { range } = useContext(AxisStateContext);
  return range;
}
