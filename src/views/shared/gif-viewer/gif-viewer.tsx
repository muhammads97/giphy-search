import spacing from '@giphy-search/res/spacing';
import React, {useMemo} from 'react';
import {Dimensions, Image, Text, View} from 'react-native';
import {IGIFViewerProps} from './gif-viewer.props';
import gifViewerStyles from './gif-viewer.styles';
const screenWidth = Dimensions.get('screen').width;
export default ({gif, title}: IGIFViewerProps) => {
  const gifStyle = useMemo(
    () => ({
      width: gif.width,
      maxWidth: screenWidth - spacing.medium * 2,
      aspectRatio: gif.width / gif.height,
      height: gif.height,
    }),
    [gif.height, gif.width],
  );
  return (
    <View style={gifViewerStyles.container}>
      {title && <Text style={gifViewerStyles.title}>{title}</Text>}
      <View style={{...gifViewerStyles.gif, ...gifStyle}}>
        <Image
          source={{uri: gif.url}}
          style={gifStyle}
          borderRadius={spacing.small}
          resizeMode={'cover'}
          onError={e => console.log(e.nativeEvent.error)}
        />
      </View>
      <View style={gifViewerStyles.gifDetails}>
        <View style={gifViewerStyles.gifTitleAndUrl}>
          <Text style={gifViewerStyles.gifText}>{gif.title}</Text>
          <Text style={gifViewerStyles.gifText} selectable={true}>
            {gif.displayUrl}
          </Text>
        </View>
        <View style={gifViewerStyles.gifRatingContainer}>
          <Text style={gifViewerStyles.gifRatingText}>{gif.rating}</Text>
        </View>
      </View>
    </View>
  );
};
