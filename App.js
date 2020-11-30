import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SearchScreen from './src/screens/searchScreen';
import ResultDetailsScreen from './src/screens/ResultDetailsScreen';

const Stack = createStackNavigator();

function App(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{title: 'Business Search', headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="ResultDetails"
          component={ResultDetailsScreen}
          options={({route}) => ({
            title: route.params.title,
            headerTitleAlign: 'center',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
