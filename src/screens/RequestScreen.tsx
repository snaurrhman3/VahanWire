import { useNavigation } from '@react-navigation/native';
import React, { useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Animated,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SCREEN_HEIGHT = Dimensions.get('window').height;

const RequestScreen: React.FC = () => {
  const sheetAnim = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Pressable style={styles.header} onPress={() => navigation.goBack()}>
        <View style={{ marginTop: 25 }}>
          <Icon name="chevron-back" size={22} color="#FFF" />
        </View>
        <Text style={styles.headerTitle}>Request</Text>
      </Pressable>

      {/* Bottom Sheet */}
      <Animated.View
        style={[styles.bottomSheet, { transform: [{ translateY: sheetAnim }] }]}
      >
        <View style={styles.sheetHandle} />

        <Text style={styles.sheetTitle}>Offer Price</Text>

        {/* User Card */}
        <View style={styles.card}>
          <View style={styles.avatar} />

          <View style={{ flex: 1 }}>
            <Text style={styles.name}>Advik Bhagat</Text>
            <Text style={styles.subText}>Location: Noida Sector 62</Text>
            <Text style={styles.subText}>To: Delhi T1</Text>
          </View>
        </View>

        {/* Amount */}
        <Text style={styles.label}>Enter Amount</Text>
        <TextInput value="₹ 485" keyboardType="numeric" style={styles.input} />

        {/* Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Offer Price</Text>
        </TouchableOpacity>
      </Animated.View>
    </SafeAreaView>
  );
};

export default RequestScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  header: {
    height: 90,
    backgroundColor: '#5A5C73',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  headerTitle: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: '35%',
    textAlign: 'center',
    marginTop: 25,
  },
  bottomSheet: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: SCREEN_HEIGHT * 0.6,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 20,
  },
  sheetHandle: {
    width: 40,
    height: 4,
    backgroundColor: '#C4C4C4',
    borderRadius: 2,
    alignSelf: 'center',
    marginBottom: 12,
  },
  sheetTitle: {
    textAlign: 'center',
    fontWeight: '700',
    marginBottom: 20,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 16,
    elevation: 2,
    marginBottom: 20,
    height: 120,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#DADDE3',
    marginRight: 12,
  },
  name: {
    fontWeight: '700',
  },
  subText: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  label: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
  },
  input: {
    backgroundColor: '#FFF',
    borderRadius: 6,
    padding: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#EEE',
  },
  button: {
    backgroundColor: '#5A5A5A',
    paddingVertical: 14,
    borderRadius: 6,
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: '600',
  },
});
