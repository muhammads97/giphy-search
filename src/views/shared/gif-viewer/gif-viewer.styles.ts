import colors from '@giphy-search/res/colors';
import spacing from '@giphy-search/res/spacing';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    margin: spacing.medium,
    alignItems: 'center',
  },
  title: {
    color: colors.search.gifText,
    fontSize: 18,
    marginBottom: spacing.smallPlus,
    width: '100%',
  },
  gif: {
    borderRadius: spacing.smallerXPlus,
    overlayColor: colors.search.background,
    overflow: 'hidden',
  },
  gifDetails: {
    marginTop: spacing.smallPlus,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
  },
  gifTitleAndUrl: {
    width: '75%',
  },
  gifText: {
    color: colors.search.gifText,
    fontSize: 18,
  },
  gifRatingContainer: {
    aspectRatio: 1,
    borderRadius: 1000,
    backgroundColor: colors.search.ratingContainer,
    justifyContent: 'center',
    alignItems: 'center',
    width: '19%',
  },
  gifRatingText: {
    fontSize: 25,
    color: colors.search.rating,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
  },
});
