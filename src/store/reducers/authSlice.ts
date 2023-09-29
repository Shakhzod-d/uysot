import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../../services/baseUrl";
import { ISignUpObj } from "@pages/Login/SignUp/types";
import { ILoginWithCode } from "./types";

interface CounterState {
  value: number;
}

export const signUpUser = createAsyncThunk(
  "auth/signUpUser",
  async (phoneObj: ISignUpObj) => {
    const authUrl = `${baseUrl}api/client/register`;
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(phoneObj),
    };

    const response = await fetch(authUrl, requestOptions);
    const data = await response.json();

    if (response.status === 200) {
      alert(data?.messages[0]);
    }

    return response;
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (codeObj: ILoginWithCode) => {
    const authUrl = `${baseUrl}api/client/login`;

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(codeObj),
    };

    const response = await fetch(authUrl, requestOptions);
    const data = await response.json();

    if (response.status === 200) {
      console.log(data);
      alert(`Muvaffaqiyatli tizimga kirdi`);
    } else {
      alert("Sms kod xato");
    }

    return response;
  }
);

const initialState: CounterState = {
  value: 0,
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(fetchUserById.pending, (state, action) => {
    //   // both `state` and `action` are now correctly typed
    //   // based on the slice state and the `pending` action creator
    // });
  },
});

export const {} = authSlice.actions;

// export const selectCount = (state: RootState) => state.counter.value;

export default authSlice.reducer;
