import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { Platform, StatusBar } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import { SafeAreaProvider } from 'react-native-safe-area-context';

// App-specific imports
import AppNavigator from './routes/AppNavigator';

// Define your navigation routes param list here
export type RootStackParamList = {
  HomeScreen: { data: any };
  // add other screens here
};

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'green',
    secondary: 'blue',
    background: 'white',
  },
};

const MainApp = () => {
  return <>{<AppNavigator />}</>;
};

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar animated barStyle="dark-content" backgroundColor={'#80D959'} />

      <PaperProvider theme={theme}>
        <MainApp />
      </PaperProvider>
    </SafeAreaProvider>
  );
};

export default App;
