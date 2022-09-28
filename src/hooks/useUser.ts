import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { User } from "../types";
import { sortByDate } from "../utils/helpers";

export const useUser = () => {
  const currentUser: User = useSelector((state: RootState) => state.user?.user);
  const recievedValue = currentUser?.recievedValue;
  const id = currentUser?.id;
  const myRewards = useSelector((state: RootState) => state.user.myRewards);
  const sortedMyRewards = [...myRewards].sort(sortByDate);
  return { id, recievedValue, myRewards: sortedMyRewards, user: currentUser };
};
