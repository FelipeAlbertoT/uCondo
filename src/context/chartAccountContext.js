import { createContext, useMemo, useReducer } from 'react';
// import chartAccountData from '../data/chartAccounts';
import { storeChartAccounts } from '../storage/storage';

const ChartAccountContext = createContext({});
const initialState = { chartAccounts: [] };

const actions = {
  deleteChartAccount(state, id) {
    const chartAccounts = state.chartAccounts.filter((item) => item.id !== id);
    storeChartAccounts(chartAccounts);
    return {
      ...state,
      chartAccounts,
    };
  },
  createChartAccount(state, chartAccount) {
    const chartAccounts = [
      ...state.chartAccounts.filter((acc) => acc.id !== chartAccount.id),
      chartAccount,
    ];
    storeChartAccounts(chartAccounts);
    return {
      ...state,
      chartAccounts,
    };
  },
  fetchChartAccounts(state, chartAccounts) {
    return { ...state, chartAccounts };
  },
};

export function ChartAccountProvider({ children }) {
  function reducer(state, action) {
    const fn = actions[action.type];
    return fn ? fn(state, action.payload) : state;
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);
  return (
    <ChartAccountContext.Provider value={value}>
      {children}
    </ChartAccountContext.Provider>
  );
}

export default ChartAccountContext;
