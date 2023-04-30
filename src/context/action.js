import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();


export async function LoginUser(dispatch, loginPayload) {
  const getAuthState = await signInWithEmailAndPassword(
    auth,
    loginPayload.email,
    loginPayload.password
  );

  if (getAuthState) {
    console.log("====================================");
    console.log("getAuthState", getAuthState);
    console.log("====================================");

    dispatch({
      type: "LOGIN_SUCCESS",
      payload: {
        user: getAuthState.data,
      },
    });
    localStorage.setItem("user", JSON.stringify(getAuthState.data));
    return getAuthState;
  }
}

export async function logoutUser(dispatch) {
  dispatch({ type: "REQUEST_LOGOUT" });
  dispatch({ type: "LOGOUT_SUCCESS" });
}

export async function startLoading(dispatch) {
  dispatch({ type: "INIT_START" });
}

export async function stopLoading(dispatch) {
  dispatch({ type: "INIT_FINISH" });
}
