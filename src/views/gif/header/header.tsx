import colors from '@giphy-search/res/colors';
import React from 'react';
import {StatusBar, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {IHeaderProps} from './header.props';
import headerStyles from './header.styles';

export default ({onClickBack, title}: IHeaderProps) => {
  return (
    <View style={headerStyles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} />
      <View style={headerStyles.row}>
        <TouchableOpacity
          style={headerStyles.back}
          activeOpacity={0.6}
          onPress={onClickBack}>
          <Icon name="chevron-back" size={35} color={colors.gif.backIcon} />
        </TouchableOpacity>
        <View style={headerStyles.titleContainer}>
          <Text style={headerStyles.title}>{title}</Text>
        </View>
      </View>
    </View>
  );
};
