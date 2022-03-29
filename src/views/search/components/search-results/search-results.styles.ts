import colors from '@giphy-search/res/colors';
import spacing from '@giphy-search/res/spacing';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingHorizontal: spacing.medium,
    paddingVertical: spacing.small,
  },
  title: {
    color: colors.search.gifText,
    fontSize: 18,
    marginBottom: spacing.smallPlus,
    width: '100%',
  },
  list: {
    flex: 1,
    width: '100%',
  },
  gif: {
    borderRadius: spacing.smallerXPlus,
    overlayColor: colors.search.background,
    overflow: 'hidden',
  },
  listContent: {},
  separator: {
    height: spacing.small,
  },
  row: {
    justifyContent: 'space-between',
  },
  loadingContainer: {
    position: 'absolute',
    top: 0,
    start: 0,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
