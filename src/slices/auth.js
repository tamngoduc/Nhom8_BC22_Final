import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authAPI from "../services/authAPI";

const initialState = {
  currentUser: JSON.parse(localStorage.getItem("user")) || {},
  isLoginLoading: false,
  loginError: null,

  registerUser: {},
  isRegisterLoading: false,
  registerError: null,
};

export const login = createAsyncThunk("auth/login", async (loginUser) => {
  try {
    const data = await authAPI.login(loginUser);
    return data;
  } catch (error) {
    throw error;
  }
});

export const register = createAsyncThunk(
  "auth/register",
  async (registerUser) => {
    try {
      const data = await authAPI.register(registerUser);
      return data;
    } catch (error) {
      throw error;
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducer: {
    logout: (state) => {
      localStorage.removeItem("user");
      return { ...state, currentUser: {} };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      return { ...state, isLoginLoading: true, loginError: null };
    });
    builder.addCase(login.fulfilled, (state, { payload }) => {
      return { ...state, isLoginLoading: false, currentUser: payload };
    });
    builder.addCase(login.rejected, (state, { error }) => {
      return { ...state, isLoginLoading: false, loginError: error.message };
    });

    builder.addCase(register.pending, (state) => {
      return { ...state, isLoginLoading: true, loginError: null };
    });
    builder.addCase(register.fulfilled, (state, { payload }) => {
      return { ...state, isLoginLoading: false, registerUser: payload };
    });
    builder.addCase(register.rejected, (state, { error }) => {
      return { ...state, isLoginLoading: false, registerError: error.message };
    });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
