import {Routes} from '@giphy-search/navigation';
import {
  IRootNavigationProp,
  IRootRouteProp,
} from '@giphy-search/navigation/app-navigator/types';

export interface IGIFScreenProps {
  navigation: IRootNavigationProp<Routes.GIF>;
  route: IRootRouteProp<Routes.GIF>;
}
