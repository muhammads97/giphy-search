import {IGIF} from '@giphy-search/services/giphy-api/types';

export interface ISearchResultsProps {
  gifs: IGIF[];
  onClickGIF: (gif: IGIF) => void;
}
