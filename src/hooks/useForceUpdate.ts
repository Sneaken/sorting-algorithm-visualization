import { useReducer } from 'react';

export function useForceUpdate() {
  const [, forceUpdate] = useReducer((v) => v + 1, 0);
  return forceUpdate;
}
