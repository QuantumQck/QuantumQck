import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { TravelList } from "./travel/TravelList";
import { TravelCreate } from "./travel/TravelCreate";
import { TravelEdit } from "./travel/TravelEdit";
import { TravelShow } from "./travel/TravelShow";
import { ActivityList } from "./activity/ActivityList";
import { ActivityCreate } from "./activity/ActivityCreate";
import { ActivityEdit } from "./activity/ActivityEdit";
import { ActivityShow } from "./activity/ActivityShow";
import { TravelTagList } from "./travelTag/TravelTagList";
import { TravelTagCreate } from "./travelTag/TravelTagCreate";
import { TravelTagEdit } from "./travelTag/TravelTagEdit";
import { TravelTagShow } from "./travelTag/TravelTagShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"grouptravel"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Travel"
          list={TravelList}
          edit={TravelEdit}
          create={TravelCreate}
          show={TravelShow}
        />
        <Resource
          name="Activity"
          list={ActivityList}
          edit={ActivityEdit}
          create={ActivityCreate}
          show={ActivityShow}
        />
        <Resource
          name="TravelTag"
          list={TravelTagList}
          edit={TravelTagEdit}
          create={TravelTagCreate}
          show={TravelTagShow}
        />
      </Admin>
    </div>
  );
};

export default App;
