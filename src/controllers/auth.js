export const loginController = (state, action) => {
  const {email, password} = action.payload;
  console.log('Payload', action.payload);
};
