import colors from '@giphy-search/res/colors';
import spacing from '@giphy-search/res/spacing';
import {IGIF} from '@giphy-search/services/giphy-api/types';
import React, {useCallback, useMemo, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Image,
  ListRenderItemInfo,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ISearchResultsProps} from './search-results.props';
import searchResultsStyles from './search-results.styles';

const screenWidth = Dimensions.get('screen').width;

export default ({gifs, onClickGIF}: ISearchResultsProps): JSX.Element => {
  const [loading, setLoading] = useState<{[key: string]: boolean}>({});
  const gifStyle = useMemo(
    () => ({
      width: (screenWidth - spacing.medium * 2 - spacing.small * 2) / 3,
      aspectRatio: 1,
    }),
    [],
  );

  const setImageLoading = useCallback(
    (id: string, value: boolean) => {
      const newLoading = {...loading, [id]: value};
      setLoading(newLoading);
    },
    [loading],
  );

  const renderGIF = ({item, index}: ListRenderItemInfo<IGIF>) => {
    const spacingStyle = {
      marginHorizontal: index % 3 === 1 ? spacing.small : 0,
    };
    return (
      <TouchableOpacity
        style={{
          ...searchResultsStyles.gif,
          ...gifStyle,
          ...spacingStyle,
        }}
        activeOpacity={0.6}
        onPress={() => onClickGIF(item)}>
        <Image
          style={gifStyle}
          source={{uri: item.small.url}}
          borderRadius={spacing.smallerXPlus}
          resizeMode={'cover'}
          onLoadStart={() => setImageLoading(item.id, true)}
          onLoadEnd={() => setImageLoading(item.id, false)}
        />
        {loading[item.id] && (
          <View style={searchResultsStyles.loadingContainer}>
            <ActivityIndicator
              color={colors.search.placeholder}
              size={'small'}
            />
          </View>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaProvider style={searchResultsStyles.container}>
      <Text style={searchResultsStyles.title}>Search results:</Text>

      <FlatList
        style={searchResultsStyles.list}
        data={gifs}
        numColumns={3}
        renderItem={renderGIF}
        keyExtractor={item => item.id}
        contentContainerStyle={searchResultsStyles.listContent}
        ItemSeparatorComponent={() => (
          <View style={searchResultsStyles.separator} />
        )}
      />
    </SafeAreaProvider>
  );
};
