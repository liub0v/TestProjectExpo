import { useContext } from "react";
import { ModalContext } from "./NewRewardModalContext";

export function useNewRewardModal() {
  return useContext(ModalContext);
}
