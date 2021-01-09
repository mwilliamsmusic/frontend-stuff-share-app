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
import ItemUserCollect from "./Components/Pages/User/UserCollectTemplates/ItemUserCollect";

function App() {
  return (
    <div>
      <Navbar />
      <Spacer />
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Route path="/singup" component={SignUp} />

        <Route path="/main/collect" component={CollectMain} />

        <Route path="/all/user/collect" component={UserCollect} />

        <Route path="/item/user/collect/:id" component={ItemUserCollect} />
        <Route path="/user/me/" component={UserMe} />

        <Route path="/*" component={Main} />
      </Switch>
    </div>
  );
}

export default App;
