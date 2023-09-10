export const getTransactions = state => {
  return Object.keys(state.transaction.data).length > 0
    ? state.transaction.data
    : null;
};
