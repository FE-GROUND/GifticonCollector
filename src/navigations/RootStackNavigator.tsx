import Home from '@controllers/Home/Home';
import {screenName} from '@navigations/constants/screenName';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

export type RootStackParamsList = {
  [screenName.Home]: undefined;
};

const RootStackNavigator = () => {
  const RootStack = createNativeStackNavigator<RootStackParamsList>();

  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
        <RootStack.Screen name={screenName.Home} component={Home} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

RootStackNavigator.displayName = 'RootNavigator';

export default RootStackNavigator;
