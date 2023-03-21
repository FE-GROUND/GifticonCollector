import {colors} from '@constants/theme';
import RootStackNavigator from '@navigations/RootStackNavigator';
import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

const fullFlex = {
  flex: 1,
  backgroundColor: colors.white,
};

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={fullFlex}>
        <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
        <RootStackNavigator />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
