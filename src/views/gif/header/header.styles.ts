import colors from '@giphy-search/res/colors';
import spacing from '@giphy-search/res/spacing';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: 70,
    marginTop: spacing.small,
    justifyContent: 'flex-end',
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  back: {
    paddingStart: spacing.small,
    paddingEnd: spacing.small,
    height: '100%',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    width: '100%',
    color: colors.gif.title,
  },
  titleContainer: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingEnd: spacing.smallPlus,
    paddingStart: spacing.small,
    marginEnd: spacing.hugeXPlus,
  },
});
