import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createFeed } from "../api";
import { Feed, User } from "../types";

interface IFeedsIntialState {
  feeds: Feed[];
  users: User[];
}
interface IAddFeedProps {
  message: string;
  userId: string;
  reward: number;
}

const dataIntialState: IFeedsIntialState = {
  feeds: [] as Feed[],
  users: [] as User[],
};
const dataSlice = createSlice({
  name: "feeds",
  initialState: dataIntialState,
  reducers: {
    setFeeds(state, action: PayloadAction<Feed[]>) {
      state.feeds = action.payload;
    },
    addFeed(state, { payload }: PayloadAction<IAddFeedProps>) {
      const newFeed = createFeed(payload);
      state.feeds.push(newFeed);
    },
    setUsers(state, action: PayloadAction<User[]>) {
      state.users = action.payload;
    },
  },
});

export const { setFeeds, setUsers, addFeed } = dataSlice.actions;
export const { reducer: dataReducer } = dataSlice;
