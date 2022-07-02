import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const COLOR = {
  _bgColor: '#000',
  _textColor: '#eee',
  _selectedColor: 'salmon',
};

const DM = {
  width,
  height,
};

const SIZES = {
  heading1: width * 0.068,
  heading2: width * 0.051,
  heading3: width * 0.038,
  button: width * 0.035,
  regular: width * 0.029,
  small: width * 0.021,
  spacer: 20,
};

const BASE_URL = 'https://api.themoviedb.org/3/';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const API_KEY = '96ee705c46ad2a47bbe1cbc8543b3dc2';

const EN = {
  headingText: `Find Movies, Tv Series,${'\n'}and more...`,
  searchPlaceholder: `Sarlock Homes`,
};

const INAME = {
  search: 'ios-search-outline',
};

export {COLOR, DM, BASE_URL, SIZES, EN, INAME, IMG_URL, API_KEY};
