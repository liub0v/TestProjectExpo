import { feeds } from "./db/feeds";
import { FeedModel, UserModel } from "./db/models";
import { user, users } from "./db/user";
import { Feed, User } from "./types";

export const getCurrentUser = (): User => {
  const data: UserModel = user;
  return data;
};

export const getFeeds = (): Feed[] => {
  const data: FeedModel[] = feeds;
  return data.map((item) => {
    const user: UserModel = getUserById(item.userId);
    const author: UserModel = getUserById(item.authorId);
    return {
      id: item.id,
      user,
      author,
      created: item.created,
      message: item.message,
      reward: item.reward,
    };
  });
};
export const createFeed = ({ message, userId, reward }): Feed => {
  const author = getCurrentUser();
  const user = getUserById(userId);
  const id = Math.floor(Math.random() * (999 - 100 + 1) + 100).toString();
  return {
    id,
    message,
    user,
    author,
    created: new Date().toUTCString(),
    reward,
  };
};

export const getUserById = (id: string): User => {
  const data: UserModel[] = users;
  const user = data.filter((item) => item.id === id);
  return user?.[0];
};

export const getUsers = (): User[] => {
  const data: UserModel[] = users;
  return data;
};

export const getMyRewards = (id: string): Feed[] => {
  const data: FeedModel[] = feeds;
  const myRewards = data.filter((item) => item.userId === id);
  return myRewards.map((item) => {
    const user: UserModel = getUserById(item.userId);
    const author: UserModel = getUserById(item.authorId);
    return {
      id: item.id,
      user,
      author,
      created: item.created,
      message: item.message,
      reward: item.reward,
    };
  });
};
