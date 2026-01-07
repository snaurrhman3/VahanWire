import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Animated,
  Dimensions,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const SCREEN_HEIGHT = Dimensions.get('window').height;

const ServiceSearchScreen: React.FC = () => {
  const navigation = useNavigation<any>();

  const [loading, setLoading] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const providerSheetAnim = useRef(new Animated.Value(SCREEN_HEIGHT)).current;

  const successSheetAnim = useRef(new Animated.Value(SCREEN_HEIGHT)).current;

  const onFindService = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setShowOverlay(true);

      Animated.timing(providerSheetAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }, 3000);
  };

  const closeProviderSheet = () => {
    Animated.timing(providerSheetAnim, {
      toValue: SCREEN_HEIGHT,
      duration: 250,
      useNativeDriver: true,
    }).start(() => setShowOverlay(false));
  };

  const onAccept = () => {
    Animated.timing(providerSheetAnim, {
      toValue: SCREEN_HEIGHT,
      duration: 250,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(successSheetAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Pressable style={styles.header} onPress={() => navigation.goBack()}>
        <View style={{ marginTop: 25 }}>
          <Icon name="chevron-back" size={22} color="#FFF" />
        </View>
        <Text style={styles.headerTitle}>Service</Text>
      </Pressable>

      {/* Form */}
      <View style={styles.form}>
        <Text style={styles.label}>Name</Text>
        <TextInput value="Advik Bhagat" editable={false} style={styles.input} />

        <Text style={styles.label}>From</Text>
        <TextInput
          value="Noida Sector 62"
          editable={false}
          style={styles.input}
        />

        <Text style={styles.label}>To</Text>
        <TextInput value="Delhi T1" editable={false} style={styles.input} />
      </View>

      {/* Find Service Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={onFindService}
        disabled={loading}
      >
        <Text style={styles.buttonText}>Find Service</Text>
      </TouchableOpacity>

      {/* Searching Overlay */}
      {loading && (
        <View style={styles.searchOverlay}>
          <Text style={styles.searchText}>Searching Provider</Text>
        </View>
      )}

      {/* Background Blur Overlay */}
      {showOverlay && (
        <Pressable style={styles.blurOverlay} onPress={closeProviderSheet} />
      )}

      {/* Provider Bottom Sheet */}
      <Animated.View
        style={[
          styles.bottomSheet,
          { transform: [{ translateY: providerSheetAnim }] },
        ]}
      >
        <View style={styles.sheetHandle} />

        <Provider
          name="Advik Bhagat"
          price="₹ 485"
          color="#FFD37A"
          onAccept={onAccept}
        />
        <Provider
          name="Rahul Saini"
          price="₹ 385"
          color="#E4EEFF"
          onAccept={onAccept}
        />
        <Provider
          name="Tapan Kumar"
          price="₹ 685"
          color="#22C55E"
          onAccept={onAccept}
        />
      </Animated.View>

      {/* Success Bottom Sheet */}
      <Animated.View
        style={[
          styles.successSheet,
          { transform: [{ translateY: successSheetAnim }] },
        ]}
      >
        <View style={styles.sheetHandle} />

        <View style={styles.successContent}>
          <View style={styles.checkCircle}>
            <Icon name="checkmark" size={36} color="#FFF" />
          </View>

          <Text style={styles.successTitle}>Hooray!</Text>
          <Text style={styles.successSubtitle}>Booking Accepted</Text>
        </View>
      </Animated.View>
    </SafeAreaView>
  );
};

const Provider = ({
  name,
  price,
  color,
  onAccept,
}: {
  name: string;
  price: string;
  color: string;
  onAccept: () => void;
}) => (
  <View style={styles.provider}>
    <View style={styles.providerRow}>
      <View style={[styles.avatar, { backgroundColor: color }]} />
      <Text style={styles.providerName}>{name}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>

    <TouchableOpacity style={styles.acceptBtn} onPress={onAccept}>
      <Text style={styles.acceptText}>Accept</Text>
    </TouchableOpacity>
  </View>
);

export default ServiceSearchScreen;

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
  form: {
    padding: 20,
  },
  label: {
    fontSize: 12,
    color: '#666',
    marginBottom: 6,
  },
  input: {
    backgroundColor: '#FFF',
    borderRadius: 6,
    padding: 12,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#5A5A5A',
    marginHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 6,
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: '600',
  },
  searchOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchText: {
    color: '#FFF',
    fontWeight: '600',
  },
  blurOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.35)',
    zIndex: 5,
  },
  bottomSheet: {
    position: 'absolute',
    bottom: 0,
    height: SCREEN_HEIGHT * 0.55,
    width: '100%',
    backgroundColor: '#FFF',
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    padding: 16,
    zIndex: 10,
  },
  successSheet: {
    position: 'absolute',
    bottom: 0,
    height: SCREEN_HEIGHT * 0.45,
    width: '100%',
    backgroundColor: '#FFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: 12,
    zIndex: 20,
  },
  sheetHandle: {
    width: 40,
    height: 4,
    backgroundColor: '#BBB',
    borderRadius: 2,
    alignSelf: 'center',
    marginBottom: 16,
  },
  provider: {
    marginBottom: 16,
    borderBottomWidth: 1,
    borderColor: '#EEE',
    paddingBottom: 12,
  },
  providerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },
  providerName: {
    fontWeight: '600',
    fontSize: 16,
    flex: 1,
    marginLeft: 10,
  },
  price: {
    fontWeight: '600',
    fontSize: 22,
  },
  acceptBtn: {
    marginTop: 10,
    backgroundColor: '#5A5A5A',
    paddingVertical: 16,
    borderRadius: 6,
  },
  acceptText: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: '600',
  },
  successContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#22C55E',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  successTitle: {
    fontSize: 20,
    fontWeight: '700',
  },
  successSubtitle: {
    fontSize: 13,
    color: '#666',
  },
});
