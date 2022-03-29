import {Screen} from '@giphy-search-shared/screen';
import giphyApi from '@giphy-search/services/giphy-api';
import React, {useCallback, useEffect, useState} from 'react';
import {SearchHeader} from './components';
import {IGIF} from '@giphy-search/services/giphy-api/types';
import {GifViewer} from '../shared/gif-viewer';
import SearchResults from './components/search-results/search-results';
import {ISearchScreenProps} from './search.props';
import {Routes} from '@giphy-search/navigation';

export default ({navigation, route}: ISearchScreenProps): JSX.Element => {
  const [gif, setGif] = useState<undefined | IGIF>(undefined);
  const [searchResults, setSearchResult] = useState<IGIF[]>([]);
  const [searching, setSearching] = useState<boolean>(false);
  const [timer, setTimer] = useState<
    ReturnType<typeof setInterval> | undefined
  >(undefined);

  const search = useCallback((keyword: string) => {
    if (keyword.length === 0) {
      return;
    }
    giphyApi.search(keyword).then(gifs => setSearchResult(gifs));
  }, []);

  const showSearch = useCallback(() => setSearching(true), []);
  const cancelSearch = useCallback(() => {
    setSearching(false);
    setSearchResult([]);
  }, []);
  const clearSearch = useCallback(() => {
    setSearchResult([]);
  }, []);

  const getRandomGIF = useCallback(() => {
    giphyApi.getRandom().then(random => setGif(random));
  }, []);

  useEffect(() => getRandomGIF(), [getRandomGIF]);

  useEffect(() => {
    if (!searching && route.name === Routes.Search && timer === undefined) {
      setTimer(setInterval(getRandomGIF, 10000));
    } else if (
      (searching || route.name !== Routes.Search) &&
      timer !== undefined
    ) {
      clearInterval(timer);
      setTimer(undefined);
    }
  }, [getRandomGIF, route.name, searching, timer]);

  const onClickGIF = useCallback(
    (clickedGIF: IGIF) => {
      navigation.push(Routes.GIF, {
        gif: clickedGIF,
      });
    },
    [navigation],
  );
  return (
    <Screen
      header={
        <SearchHeader
          search={search}
          showSearch={showSearch}
          cancelSearch={cancelSearch}
          clearSearch={clearSearch}
        />
      }>
      {searching ? (
        <SearchResults gifs={searchResults} onClickGIF={onClickGIF} />
      ) : (
        gif && <GifViewer gif={gif} title={'Random selected GIF:'} />
      )}
    </Screen>
  );
};
