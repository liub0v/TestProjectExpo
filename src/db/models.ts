export interface UserModel {
  id: string;
  firstName: string;
  lastName: string;
  imageUrl: string;
  givenValue: number;
  recievedValue: number;
}

export interface FeedModel {
  id: string;
  userId: string;
  authorId: string;
  reward: number;
  message: string;
  created: string;
}
