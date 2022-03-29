import {GifViewer} from '@giphy-search-shared/gif-viewer';
import {Screen} from '@giphy-search-shared/screen';
import React, {useCallback} from 'react';
import {IGIFScreenProps} from './gif.props';
import {Header} from './header';

export default ({navigation, route}: IGIFScreenProps) => {
  const gif = route.params.gif;
  const onClickBack = useCallback(() => {
    navigation.pop();
  }, [navigation]);
  return (
    <Screen header={<Header onClickBack={onClickBack} title={gif.title} />}>
      <GifViewer gif={gif} />
    </Screen>
  );
};
