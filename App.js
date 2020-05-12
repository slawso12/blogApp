import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';
import React from 'react';


const navigator = createStackNavigator(
  {
    // Home: HomeScreen,
    Index: IndexScreen
    // ResultsShow: ResultsShowScreen 
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: "Blog App"
    }
  }
);

 const App = createAppContainer(navigator);

 // Wrapping the App within a custom component
 export default () => {
  return <App />;

 }
