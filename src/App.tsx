import React from "react";
import {Route, Switch} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Main from "./Components/Pages/Main/Main";
import SignIn from "./Components/Auth/SignIn";
import SignUp from "./Components/Auth/SignUp";
import UserCollect from "./Components/Pages/User/UserCollectTemplates/UserCollect";
import UserMe from "./Components/Pages/User/UserMe";
import CollectMain from "./Components/Pages/Main/CollectMain";
import ItemsUserCollect from "./Components/Pages/User/UserCollectTemplates/ItemsUserCollect";
import {
  collectUser,
  itemsUserCollectId,
  itemUserId,
  mainCollect,
  signIn,
  signUp,
  userMe,
  usernameCollects,
} from "./Utils/URL/frontURL";
import ItemUser from "./Components/Pages/User/UserCollectTemplates/ItemUser";
import {
  GradientBackground,
  LargeScreen,
  SmallScreen,
  Spacer,
} from "./CSS/GlobalCSS/globalCSS";
import NavbarMobile from "./Components/Mobile/NavbarMobile";
import Collect from "./Components/Pages/CollectTemplates/Collect";

function App() {
  return (
    <GradientBackground>
      <Spacer height="10px" />
      <LargeScreen>
        <Navbar />
        <Spacer height="50px" />
      </LargeScreen>

      <SmallScreen>
        <NavbarMobile />
        <Spacer height="10px" />
      </SmallScreen>

      <Switch>
        <Route path={signIn} component={SignIn} />
        <Route path={signUp} component={SignUp} />

        <Route path={usernameCollects} component={Collect} />

        <Route path={mainCollect} component={CollectMain} />

        <Route path={collectUser} component={UserCollect} />
        <Route path={itemsUserCollectId} component={ItemsUserCollect} />
        <Route path={itemUserId} component={ItemUser} />
        <Route path={userMe} component={UserMe} />

        <Route path="/*" component={Main} />
      </Switch>
      <Spacer height="500px" />
    </GradientBackground>
  );
}

export default App;
