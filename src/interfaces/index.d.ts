export interface ICategory {
  id: number;
  title: string;
}

export interface IPost {
  id: number;
  title: string;
  status: "published" | "draft" | "rejected";
  category: { id: number };
  createdAt: string;
}

export interface IDistributor {
  id: number;
  name: string;
  url: string;
}

export interface IAccount {
  id: number;
  name: string;
  username: string;
  password: string;
  distributor: {
    id: number;
    name: string;
  };
}

export interface ISong {
  id: number;
  name: string;
  spotifyUrl: string;
  views: number;
  // account: IAccount;
}
