import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthScreenParamList } from './routes/RouteType';


type NavigationProp = StackNavigationProp<AuthScreenParamList>;

const SplashScreen = ({}) => {
  const navigation = useNavigation<NavigationProp>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('RoleSelectionScreen');
    }, 3000); // show splash for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={'transparent'}
        translucent={true}
        hidden={false}
        barStyle="light-content"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0B1A2D',
    padding: 10,
  },
  text: {
    fontSize: 24,
    color: '#fff',
  },
});

export default SplashScreen;
