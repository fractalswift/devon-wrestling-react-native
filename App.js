import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import MatchScreen from './src/screens/MatchScreen';
import RulesScreen from './src/screens/RulesScreen';


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Match: MatchScreen,
    Rules: RulesScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
