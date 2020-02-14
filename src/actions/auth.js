import axios from "axios";

import { REGISTER_SUCCESS, REGISTER_FAIL } from "./types";

// Register the User
export const register = ({
  name,
  email,
  password1,
  password2
}) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const body = JSON.stringify({ name, email, password1, password2 });
  try {
    const res = await axios.post(
      "http://desaparecido.pymerio.com/api/auth/registration/",
      body,
      config
    );
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL
    });
  }
};
