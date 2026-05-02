import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const Userlar = createAsyncThunk("use", async () => {
  const responce = await axios.get("https://dummyjson.com/users");
  return responce.data.users;
});
const userSlice = createSlice({
  name: "useSlice",
  initialState: {
    isLoading: false,
    isError: null,
    data: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(Userlar.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = null;
      state.data = action.payload;
    });
    builder.addCase(Userlar.pending, (state) => {
      state.isError = null;
      state.isLoading = true;
      state.data = [];
    });
    builder.addCase(Userlar.rejected, (state) => {
      state.isError = "xato yuzaga keldi";
      state.isLoading = false;
      state.data = [];
    });
  },
});
export default userSlice.reducer;
