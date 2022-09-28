import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Feed, User } from "../types";
import { addFeed } from "./dataSlice";

interface IUserIntialState {
  user: User;
  myRewards: Feed[];
}

const userIntialState: IUserIntialState = {
  user: {} as User,
  myRewards: [] as Feed[],
};

const userSlice = createSlice({
  name: "user",
  initialState: userIntialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
    setMyRewards(state, action: PayloadAction<Feed[]>) {
      state.myRewards = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addFeed, (state, action) => {
      const recievedValue = state?.user?.recievedValue - action.payload.reward;
      state.user = { ...state.user, recievedValue };
    });
  },
});

export const { setUser, setMyRewards } = userSlice.actions;
export const { reducer: userReducer } = userSlice;
