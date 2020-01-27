import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';

const Routes = createAppContainer(
  createStackNavigator({
    Main,
    Login,
    Cadastro,
  }, {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#03dbfc',
      },
      headerTintColor: '#fc6203' 
    },
  }),
);

export default Routes;