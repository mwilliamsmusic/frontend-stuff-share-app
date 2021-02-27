import React from "react";
import {Route, Switch} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Main from "./Components/Pages/Main/Main";
import {Spacer} from "./CSS/globalCSS";
import SignIn from "./Components/Auth/SignIn";
import SignUp from "./Components/Auth/SignUp";
import UserCollect from "./Components/Pages/User/UserCollectTemplates/UserCollect";
import UserMe from "./Components/Pages/User/UserMe";
import CollectMain from "./Components/Pages/Main/CollectMain";
import ItemsUserCollect from "./Components/Pages/User/UserCollectTemplates/ItemsUserCollect";
import {
  itemsUserCollectId,
  itemUserId,
  mainCollect,
  signIn,
  signUp,
  userCollect,
  userMe,
} from "./Utils/URL/reactURL";
import ItemUser from "./Components/Pages/User/UserCollectTemplates/ItemUser";

function App() {
  return (
    <div>
      <Navbar />
      <Spacer height="100px" />
      <Switch>
        <Route path={signIn} component={SignIn} />
        <Route path={signUp} component={SignUp} />

        <Route path={mainCollect} component={CollectMain} />

        <Route path={userCollect} component={UserCollect} />
        <Route path={itemsUserCollectId} component={ItemsUserCollect} />
        <Route path={itemUserId} component={ItemUser} />
        <Route path={userMe} component={UserMe} />

        <Route path="/*" component={Main} />
      </Switch>
    </div>
  );
}

export default App;
//<Route path="/item/user/:id" component={} />
