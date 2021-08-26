import { actionTypes as AT } from "../actions/action-types";

export const authReducer = (
  state = { user: null, admin: false },
  { type, payload }
) => {
  switch (type) {
    case AT.LOGIN_USER:
      return { ...state, ...payload };
    case AT.LOGOUT_USER:
      return { user: null, admin: false };

    default:
      return state;
  }
};

export default authReducer;
