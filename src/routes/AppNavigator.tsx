import React, { useEffect } from 'react';
import { ActivityIndicator, Text, useColorScheme, View } from 'react-native';
import {
  TransitionPresets,
  createStackNavigator,
} from '@react-navigation/stack';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';

//helpers
import { AuthScreenParamList } from './RouteType';

// screens
import RoleSelectionScreen from '../screens/RoleSelectionScreen';
import SplashScreen from '../SplashScreen';
import ServiceSearchScreen from '../screens/ServiceSearchScreen';
import RequestScreen from '../screens/RequestScreen';

const Stack = createStackNavigator<AuthScreenParamList>();

const AppNavigator = ({}) => {
  const theme = useColorScheme();

  return (
    <NavigationContainer
      fallback={
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <ActivityIndicator />
          <Text>Loading....</Text>
        </View>
      }
      theme={theme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <Stack.Navigator screenOptions={{}}>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{
            ...TransitionPresets.SlideFromRightIOS,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="RoleSelectionScreen"
          component={RoleSelectionScreen}
          options={{
            ...TransitionPresets.SlideFromRightIOS,
            headerShown: false,
          }}
        />
          <Stack.Screen
          name="ServiceSearchScreen"
          component={ServiceSearchScreen}
          options={{
            ...TransitionPresets.SlideFromRightIOS,
            headerShown: false,
          }}
        />
          <Stack.Screen
          name="RequestScreen"
          component={RequestScreen}
          options={{
            ...TransitionPresets.SlideFromRightIOS,
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
