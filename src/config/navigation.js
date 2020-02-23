import React from 'react';
import TaskList from '../screens/TaskList';
import DoneList from '../screens/DoneList';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {Icon} from 'react-native-elements';
import Theme from './theme';

const Tab = createBottomTabNavigator();

const AppWithNavigation = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;

        if (route.name === 'Tasks') {
          iconName = 'layers';
        } else if (route.name === 'Completed') {
          iconName = 'check';
        }

        return (
          <Icon
            type="simple-line-icon"
            name={iconName}
            size={size}
            color={color}
          />
        );
      },
    })}
    tabBarOptions={{
      activeTintColor: Theme.three,
      inactiveTintColor: Theme.one,
      showLabel: false,
      style: {
        height: 60,
      },
    }}>
    <Tab.Screen name="Tasks" component={TaskList} />
    <Tab.Screen name="Completed" component={DoneList} />
  </Tab.Navigator>
);

const App = () => (
  <NavigationContainer>
    <AppWithNavigation />
  </NavigationContainer>
);

export default App;
