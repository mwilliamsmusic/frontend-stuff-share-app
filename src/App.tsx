import React from "react";

import {Route, Switch} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Main from "./Components/Pages/Main/Main";
import {Spacer} from "./CSS/globalCSS";
import Fave from "./Components/Pages/Fave/Fave";
import Collect from "./Components/Pages/Collect";
import SignIn from "./Components/Auth/SignIn";
import SignUp from "./Components/Auth/SignUp";
import UserCollect from "./Components/Pages/User/UserCollect";
import UserFave from "./Components/Pages/User/UserFave";
import UserMe from "./Components/Pages/User/UserMe";
import CollectMain from "./Components/Pages/Main/CollectMain";
import FaveMain from "./Components/Pages/Main/FaveMain";

function App() {
  return (
    <div>
      <Navbar />
      <Spacer />
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Route path="/singup" component={SignUp} />

        <Route path="/main/collect" component={CollectMain} />
        <Route path="/main/fave" component={FaveMain} />

        <Route path="/collect/:id" component={Collect} />
        <Route path="/fave/:id" component={Fave} />

        <Route path="/item/collect/:id" component={} />
        <Route path="/item/fave/:id" component={} />

        <Route path="/user/item/collect/:id" component={UserCollectItem} />
        <Route path="/user/item/fave/:id" component={UserFaveItem} />

        <Route path="/user/collect/" component={UserCollect} />
        <Route path="/user/fave/" component={UserFave} />
        <Route path="/user/me/" component={UserMe} />

        <Route path="/*" component={Main} />
      </Switch>
    </div>
  );
}

export default App;
