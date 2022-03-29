import {SearchBar} from '@giphy-search/views/search/components/search-bar';
import React from 'react';
import {StatusBar, View} from 'react-native';
import {IHeaderProps} from './header.props';
import headerStyles from './header.styles';

export default ({
  search,
  showSearch,
  cancelSearch,
  clearSearch,
}: IHeaderProps) => {
  return (
    <View style={headerStyles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} />
      <SearchBar
        search={search}
        cancelSearch={cancelSearch}
        showSearch={showSearch}
        clearSearch={clearSearch}
      />
    </View>
  );
};
