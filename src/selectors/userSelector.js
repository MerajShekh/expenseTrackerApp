export const checkLogin = state => {
  return state.auth.isLoggedIn;
};

export const getUser = state => {
  return Object.keys(state.auth.user).length > 0 ? state.auth.user : null;
};

export const getCategories = state => {
  return Object.keys(state.category.data).length > 0
    ? state.category.data
    : null;
};
