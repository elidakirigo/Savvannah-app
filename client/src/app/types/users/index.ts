export type AllUsers = {
  id: number;
  name: string;
  email: string;
};

export type Allalbums = {
  userId: number;
  id: number;
  title: string;
};

export type Allphotos = {
  id: number;
  thumbnailUrl: string;
  title: string;
  url: string;
  albumId: number;
};
