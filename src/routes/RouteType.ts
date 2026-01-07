import type { StackScreenProps } from '@react-navigation/stack';

export type AuthScreenParamList = {
  SplashScreen: undefined;
  RoleSelectionScreen: undefined;
  ServiceSearchScreen: undefined;
  RequestScreen: undefined;
};

export type RootStackParamList = {};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
