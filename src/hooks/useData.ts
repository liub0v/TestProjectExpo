import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { User } from "../types";
import { sortByDate } from "../utils/helpers";
import { useUser } from "./useUser";

export const useData = () => {
  const { id } = useUser();
  const users: User[] = useSelector((state: RootState) => state.data?.users);
  const filteredUsers = users?.filter((user: User) => user.id !== id);

  const feeds = useSelector((state: RootState) => state.data.feeds);
  const sortedFeeds = [...feeds].sort(sortByDate);
  return { users: filteredUsers, feeds: sortedFeeds };
};
