export type Card = {
  id: string;
  image: string;
  title: string;
  text: string;
  date: string;
  saved?: boolean;
  likeStatus?: LikeStatus | null;

};
export enum LikeStatus {
  Like = "like",
  Dislike = "dislike",
  Save = 'save'
}
