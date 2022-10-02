import { Refine } from "@pankod/refine-core";
import {
  Layout,
  ReadyPage,
  notificationProvider,
  ErrorComponent,
} from "@pankod/refine-antd";
// import dataProvider from "@pankod/refine-simple-rest";
import { DataProvider, AuthHelper } from "@pankod/refine-strapi-v4";
import routerProvider from "@pankod/refine-react-router-v6";
import authProvider from "./auth-provider";
import "@pankod/refine-antd/dist/styles.min.css";

import { PostList, PostShow, PostEdit, PostCreate } from "./pages/posts";
import {
  DistributorList,
  DistributorShow,
  DistributorEdit,
  DistributorCreate,
} from "pages/distributors";
import {
  AccountList,
  AccountShow,
  AccountEdit,
  AccountCreate,
} from "pages/accounts";
import { API_URL } from "./constants";

import "index.css";
import { SongCreate, SongEdit, SongList, SongShow } from "pages/songs";

const App: React.FC = () => {
  return (
    <Refine
      routerProvider={routerProvider}
      // dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
      dataProvider={DataProvider(API_URL)}
      Layout={Layout}
      ReadyPage={ReadyPage}
      notificationProvider={notificationProvider}
      catchAll={<ErrorComponent />}
      // authProvider={AuthHelper}
      resources={[
        // {
        //   name: "posts",
        //   list: PostList,
        //   show: PostShow,
        //   edit: PostEdit,
        //   create: PostCreate,
        //   canDelete: true,
        // },
        {
          name: "distributors",
          list: DistributorList,
          show: DistributorShow,
          edit: DistributorEdit,
          create: DistributorCreate,
          canDelete: true,
        },
        {
          name: "accounts",
          list: AccountList,
          show: AccountShow,
          edit: AccountEdit,
          create: AccountCreate,
          canDelete: true,
        },
        {
          name: "songs",
          list: SongList,
          show: SongShow,
          edit: SongEdit,
          create: SongCreate,
          canDelete: true,
        },
      ]}
    />
  );
};

export default App;
