import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { AuthScreenParamList } from '../routes/RouteType';
import { useNavigation } from '@react-navigation/native';

type Role = 'user' | 'serviceProvider';

  type NavigationProp = StackNavigationProp<AuthScreenParamList>;


const RoleSelectionScreen: React.FC = () => {
    const navigation = useNavigation<NavigationProp>()
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  

 const RoleCard = ({ label, role }: { label: string; role: Role }) => {
   const onPress = () => {
     setSelectedRole(role);

     if (role === 'user') {
       navigation.navigate('ServiceSearchScreen');
     } else {
       navigation.navigate('RequestScreen');
     }
   };

   return (
     <TouchableOpacity
       activeOpacity={0.8}
       onPress={onPress}
       style={[styles.card, selectedRole === role && styles.cardSelected]}
     >
       <View style={styles.avatar} />
       <Text style={styles.cardText}>{label}</Text>
     </TouchableOpacity>
   );
 };


  return (
    <SafeAreaView style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <View style={styles.logoBox}>
          <Text style={styles.logoText}>LOGO</Text>
        </View>
      </View>

      {/* Options */}
      <View style={styles.optionsContainer}>
        <RoleCard label="User" role="user"  />
        <RoleCard label="Service Provider" role="serviceProvider" />
      </View>
    </SafeAreaView>
  );
};

export default RoleSelectionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    paddingHorizontal: 20,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoBox: {
    width: 90,
    height: 90,
    borderRadius: 12,
    backgroundColor: '#2F3142',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
  },
  logoText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14,
  },
  optionsContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    gap: 16,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 16,
  },
  cardSelected: {
    borderWidth: 2,
    borderColor: '#2F80ED',
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#DADDE3',
    marginRight: 14,
  },
  cardText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1C1C1E',
  },
});
