import {Routes} from '@giphy-search/navigation';
import {
  IRootNavigationProp,
  IRootRouteProp,
} from '@giphy-search/navigation/app-navigator/types';

export interface ISearchScreenProps {
  navigation: IRootNavigationProp<Routes.Search>;
  route: IRootRouteProp<Routes.Search>;
}
