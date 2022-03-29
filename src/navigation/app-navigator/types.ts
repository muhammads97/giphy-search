import {Routes} from '@giphy-search/navigation';
import {IGIF} from '@giphy-search/services/giphy-api/types';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  [Routes.Search]: undefined;
  [Routes.GIF]: {gif: IGIF};
};

type IRootRoute = keyof RootStackParamList;

export type IRootNavigationProp<R extends IRootRoute> =
  NativeStackNavigationProp<RootStackParamList, R>;
export type IRootRouteProp<R extends IRootRoute> = RouteProp<
  RootStackParamList,
  R
>;
