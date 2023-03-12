import { createContext, useMemo, useReducer } from 'react';
import reducer from './reducer';

const ChartAccountContext = createContext({});

const initialState = { chartAccounts: [] };

export function ChartAccountProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);
  return (
    <ChartAccountContext.Provider value={value}>
      {children}
    </ChartAccountContext.Provider>
  );
}

export default ChartAccountContext;
