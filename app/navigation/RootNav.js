
import { StackNavigator } from 'react-navigation';
import User from '../screens/users';
import Home from '../screens/home';

const navigation = StackNavigator(
  {
    User: {
      screen: User,
      navigationOptions: () => ({
        title: 'Users',
        headerBackTitle: 'A much too long text for back button from B to A',
      }),
    },
    Home: {
      screen: Home,
      navigationOptions: () => ({
        header: null,
      }),
    },
  },
  {
    initialRouteName: 'Home',
  },
);


export default navigation;
