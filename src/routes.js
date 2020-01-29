/******************************************
 *  Author : Leandro Ferreira Netto
 *  Created On : Wed Jan 29 2020
 *  File : routes.js
 *******************************************/

import { createStackNavigator } from "react-navigation";
import Login from "./pages/login";
import Logged from "./pages/logged";

export const SignedOutRoutes = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      title: "Entrar"
    }
  }
});

export const SignedInRoutes = createStackNavigator({
  Logged: {
    screen: Logged,
    navigationOptions: {
      title: "Meu Perfil"
    }
  }
});
