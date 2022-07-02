import {StyleSheet} from 'react-native';
import {COLOR, DM, SIZES} from '../assets/config';

const GStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  ph20: {
    paddingHorizontal: 20,
  },
  ml05: {marginLeft: 5},
  ml20: {marginLeft: 20},

  // Loader Style
  loaderStyle: {
    marginVertical: DM.height * 0.05,
    width: '100%',
    alignItems: 'center',
  },

  // MovieList Discover Style Start
  mlHeaderText: {
    fontSize: SIZES.heading1,
    fontWeight: '500',
    color: COLOR._textColor,
  },
  itemCenterize: {justifyContent: 'center', alignItems: 'center'},
  movieCardWrap: {
    margin: 5,
    marginTop: 30,
    flex: 1,
  },
  mlheadingWrapper: {
    paddingHorizontal: SIZES.spacer,
    paddingTop: SIZES.spacer * 1.5,
    paddingBottom: SIZES.spacer,
  },
  mlSearch: {
    backgroundColor: '#333',
    borderRadius: 40,
    paddingLeft: 50,
    color: COLOR._textColor,
    height: 50,
    fontSize: SIZES.regular * 1.5,
  },
  searchIcon: {
    position: 'absolute',
    top: 0,
    left: 15,
    height: 50,
    justifyContent: 'center',
  },
  selectedMarked: {
    height: 3,
    width: SIZES.regular * 2,
    backgroundColor: COLOR._selectedColor,
    borderRadius: 3,
  },
  mlItemText: {
    marginTop: 5,
    paddingHorizontal: 2,
    fontSize: SIZES.heading2 * 0.8,
    fontWeight: '500',
    color: COLOR._textColor,
  },
  mlImgStyle: {
    alignSelf: 'stretch',
    borderRadius: 10,
  },

  // Details style start
  detailsContainer: {flexDirection: 'row', marginTop: 20},
  detailsHeader: {
    fontSize: 24,
    color: COLOR._textColor,
    maxWidth: DM.width * 0.82,
  },
  bannerStyle: {width: '100%', height: DM.height * 0.45, resizeMode: 'cover'},
  details4k: {
    width: 28,
    height: 28,
    borderRadius: 4,
    backgroundColor: 'rgba(255,255,255,.4)',
    marginLeft: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  details4kTxt: {margin: 0, padding: 0, color: '#FFF'},
  detailsBotttomIconTxt: {
    marginLeft: 8,
    color: COLOR._textColor,
    fontSize: SIZES.heading3,
  },
  metaBottom: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomColor: '#555',
    borderTopColor: '#555',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginVertical: 20,
  },
  releaseText: {fontSize: 20, marginBottom: 8, color: COLOR._textColor},
  genreTxt: {fontSize: 20, marginBottom: 2, color: COLOR._textColor},
  releaseText2: {color: COLOR._textColor},
  detailsText: {color: COLOR._textColor, fontSize: 16, lineHeight: 22},
  genreListItem: {
    backgroundColor: 'rgba(255,255,255,.2)',
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginRight: 10,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  relatedImgWrap: {marginRight: 15, width: 150},
  relatedImg: {
    width: 150,
    height: 170,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  relatedImgText: {
    fontSize: 16,
    marginBottom: 2,
    marginTop: 5,
    color: COLOR._textColor,
    fontWeight: '500',
  },
});

export default GStyle;
