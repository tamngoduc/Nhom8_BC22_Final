import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userAPI from "../services/userAPI";

const initialState = {
  userDetails: {},
  isUserDetailsLoading: false,
  userDetailsError: null,

  usersList: [],
  isUsersListLoading: false,
  usersListError: null,

  updatedUserResponse: {},
  isUpdatedUserResponseLoading: false,
  updatedUserResponseError: null,

  deletedUserResponse: {},
  isDeletedUserResponseLoading: false,
  deletedUserResponseError: null,

  addedUserResponse: {},
  isAddedUserResponseLoading: false,
  addedUserResponseError: null,
};

export const getUserDetails = createAsyncThunk(
  "user/getUserDetails",
  async (userId) => {
    try {
      const data = await userAPI.getUserDetails(userId);
      return data;
    } catch (error) {
      throw error;
    }
  }
);

export const getUsersList = createAsyncThunk("user/getUsersList", async () => {
  try {
    const data = await userAPI.getUsersList();
    return data;
  } catch (error) {
    throw error;
  }
});

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (userId, user) => {
    try {
      const data = await userAPI.updateUser(userId, user);
      return data;
    } catch (error) {
      throw error;
    }
  }
);

export const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async (userId) => {
    try {
      const data = await userAPI.deleteUser(userId);
      return data;
    } catch (error) {
      throw error;
    }
  }
);

export const addUser = createAsyncThunk("user/addUser", async (user) => {
  try {
    const data = await userAPI.addUser(user);
    return data;
  } catch (error) {
    throw error;
  }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder.addCase(getUserDetails.pending, (state) => {
      return { ...state, isUserDetailsLoading: true, userDetailsError: null };
    });
    builder.addCase(getUserDetails.fulfilled, (state, { payload }) => {
      return { ...state, isUserDetailsLoading: false, userDetails: payload };
    });
    builder.addCase(getUserDetails.rejected, (state, { error }) => {
      return {
        ...state,
        isUserDetailsLoading: false,
        userDetailsError: error.message,
      };
    });

    builder.addCase(getUsersList.pending, (state) => {
      return { ...state, isUsersListLoading: true, usersListError: null };
    });
    builder.addCase(getUsersList.fulfilled, (state, { payload }) => {
      return { ...state, isUsersListLoading: false, usersList: payload };
    });
    builder.addCase(getUsersList.rejected, (state, { error }) => {
      return {
        ...state,
        isUsersListLoading: false,
        usersListError: error.message,
      };
    });

    builder.addCase(updateUser.pending, (state) => {
      return {
        ...state,
        isUpdatedUserResponseLoading: true,
        updatedUserResponseError: null,
      };
    });
    builder.addCase(updateUser.fulfilled, (state, { payload }) => {
      return {
        ...state,
        isUpdatedUserResponseLoading: false,
        updatedUserResponse: payload,
      };
    });
    builder.addCase(updateUser.rejected, (state, { error }) => {
      return {
        ...state,
        isUpdatedUserResponseLoading: false,
        updatedUserResponseError: error.message,
      };
    });

    builder.addCase(deleteUser.pending, (state) => {
      return {
        ...state,
        isDeletedUserResponseLoading: true,
        deletedUserResponseError: null,
      };
    });
    builder.addCase(deleteUser.fulfilled, (state, { payload }) => {
      return {
        ...state,
        isDeletedUserResponseLoading: false,
        deletedUserResponse: payload,
      };
    });
    builder.addCase(deleteUser.rejected, (state, { error }) => {
      return {
        ...state,
        isDeletedUserResponseLoading: false,
        deletedUserResponseError: error.message,
      };
    });

    builder.addCase(addUser.pending, (state) => {
      return {
        ...state,
        isAddedUserResponseLoading: true,
        addedUserResponseError: null,
      };
    });
    builder.addCase(addUser.fulfilled, (state, { payload }) => {
      return {
        ...state,
        isAddedUserResponseLoading: false,
        addedUserResponse: payload,
      };
    });
    builder.addCase(addUser.rejected, (state, { error }) => {
      return {
        ...state,
        isAddedUserResponseLoading: false,
        addedUserResponseError: error.message,
      };
    });
  },
});

export default userSlice.reducer;
