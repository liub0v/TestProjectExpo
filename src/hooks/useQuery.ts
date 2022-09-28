import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCurrentUser, getFeeds, getUsers, getMyRewards } from "../api";
import { setFeeds, setUsers } from "../redux/dataSlice";
import { setUser, setMyRewards } from "../redux/userSlice";

export const useQuery = () => {
  const dispatch = useDispatch();
  const currentUser = getCurrentUser();
  const feeds = getFeeds();
  const users = getUsers();

  useEffect(() => {
    dispatch(setUser(currentUser));
    dispatch(setFeeds(feeds));
    dispatch(setUsers(users));
    const myRewards = getMyRewards(currentUser.id);
    dispatch(setMyRewards(myRewards));
  }, [currentUser, dispatch, feeds, users]);
};
