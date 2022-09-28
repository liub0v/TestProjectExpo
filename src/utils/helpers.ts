import { Feed } from "../types";

export const dateParser = (dateString: string | Date): string => {
  return new Date(dateString).toLocaleString("en-us", {
    month: "short",
    year: "numeric",
    day: "numeric",
  });
};

export function sortByDate(a: Feed, b: Feed) {
  return new Date(b.created).getTime() - new Date(a.created).getTime();
}
