import { storeChartAccounts } from './store';

const actions = {
  deleteChartAccount(state, id) {
    const chartAccounts = state.chartAccounts.filter((item) => item.id !== id);
    storeChartAccounts(chartAccounts);
    return {
      ...state,
      chartAccounts,
    };
  },
  createChartAccount(state, { chartAccount, newParentChartAccounts }) {
    const chartAccounts = [
      ...state.chartAccounts.filter((acc) => acc.id !== chartAccount.id),
      ...newParentChartAccounts,
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

export default actions;
