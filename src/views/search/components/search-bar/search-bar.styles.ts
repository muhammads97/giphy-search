import colors from '@giphy-search/res/colors';
import spacing from '@giphy-search/res/spacing';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    paddingHorizontal: spacing.medium,
    paddingVertical: spacing.small,
  },
  inputContainer: {
    backgroundColor: colors.search.searchBar,
    flex: 1,
    height: '100%',
    borderRadius: spacing.small,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  searchButton: {
    aspectRatio: 1,
    paddingHorizontal: spacing.smallPlus,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchIcon: {
    color: colors.search.searchIcon,
  },
  searchInput: {
    color: colors.search.searchText,
    fontSize: 17,
    flex: 1,
  },
  cancelButton: {
    height: '100%',
    padding: spacing.small,
  },
  cancel: {
    color: colors.search.searchText,
    fontSize: 17,
  },
});
