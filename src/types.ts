export interface User {
  id: string;
  firstName: string;
  lastName: string;
  imageUrl: string;
  givenValue: number;
  recievedValue: number;
}

export interface Feed {
  id: string;
  user: User;
  author: User;
  reward: number;
  message: string;
  created: string | Date;
}
