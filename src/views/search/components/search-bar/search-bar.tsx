import React, {useCallback, useEffect, useRef, useState} from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import searchBarStyles from './search-bar.styles';
import Icon from 'react-native-vector-icons/Feather';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import colors from '@giphy-search/res/colors';
import {Text} from 'react-native';
import {ISearchBarProps} from './search-bar.props';

export default ({
  search,
  showSearch,
  cancelSearch,
  clearSearch,
}: ISearchBarProps) => {
  const inputRef = useRef<TextInput>(null);
  const [keyword, setKeyword] = useState('');
  const [typing, setTyping] = useState(false);

  const onCancel = useCallback(() => {
    setKeyword('');
    inputRef.current?.blur();
  }, []);

  const onSearch = useCallback(() => {
    search(keyword);
  }, [keyword, search]);

  useEffect(() => {
    if (typing || keyword.length > 0) {
      showSearch();
    } else {
      cancelSearch();
    }
  }, [typing, keyword.length, showSearch, cancelSearch]);

  useEffect(() => {
    if (keyword.length >= 2) {
      search(keyword);
    } else {
      clearSearch();
    }
  }, [clearSearch, keyword, search]);

  const clearKeyword = useCallback(() => setKeyword(''), []);

  return (
    <View style={searchBarStyles.container}>
      <View style={searchBarStyles.inputContainer}>
        <TouchableOpacity
          style={searchBarStyles.searchButton}
          activeOpacity={0.6}
          onPress={onSearch}>
          <Icon name="search" size={28} color={colors.search.searchIcon} />
        </TouchableOpacity>
        <TextInput
          ref={inputRef}
          placeholder="Search"
          placeholderTextColor={colors.search.placeholder}
          style={searchBarStyles.searchInput}
          value={keyword}
          onChange={e => setKeyword(e.nativeEvent.text)}
          onFocus={() => setTyping(true)}
          onBlur={() => setTyping(false)}
        />
        {keyword.length > 0 && (
          <TouchableOpacity
            style={searchBarStyles.searchButton}
            activeOpacity={0.6}
            onPress={clearKeyword}>
            <AntDesignIcon
              name="closecircle"
              size={24}
              color={colors.search.searchIcon}
            />
          </TouchableOpacity>
        )}
      </View>
      {(typing || keyword.length > 0) && (
        <TouchableOpacity
          style={searchBarStyles.cancelButton}
          activeOpacity={0.6}
          onPress={onCancel}>
          <Text style={searchBarStyles.cancel}>Cancel</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
