import {API_KEY, BASE_URL} from '../../assets/config';

const NetworkCall = async url => {
  try {
    let response = await fetch(url);
    let data = await response.json();
    return data;
  } catch (error) {
    return null;
  }
};

export const setMovieList = list => {
  return {
    type: 'SET_MOVIE_LIST',
    payload: list,
  };
};

export const toggleRefreshItem = bool => {
  return {
    type: 'TOGGLE_REFRESH_ITEMS',
    payload: bool,
  };
};

export const callMovieItem = url => {
  return async dispatch => {
    let result = await NetworkCall(url);
    if (!!result) {
      dispatch(setMovieList(result));
    }
  };
};

export const onRefreshList = () => {
  return async dispatch => {
    dispatch(toggleRefreshItem(true));
    let url = `${BASE_URL}trending/all/day?api_key=${API_KEY}&page=1`;
    dispatch(setSelectedCatagory('Trending'));
    dispatch(callMovieItem(url));
  };
};

export const toggleLoaderBottom = bool => {
  return {
    type: 'TOGGLE_LOADER_BOTTOM',
    payload: bool,
  };
};

export const setMovieListNextItem = list => {
  return {
    type: 'SET_MOVIE_LIST_NEXT_ITEM',
    payload: list,
  };
};

export const callNextPageMovies = () => {
  return async (dispatch, getState) => {
    const {selectedCatagory, currentPage, searchText} = getState().movieReducer;

    dispatch(toggleLoaderBottom(true));

    let URL;
    let page = +currentPage + 1;
    if (searchText == '') {
      switch (selectedCatagory) {
        case 'Trending':
          URL = `${BASE_URL}trending/all/day?api_key=${API_KEY}&page=${page}`;
          break;
        case 'Popular':
          URL = `${BASE_URL}movie/popular?api_key=${API_KEY}&page=${page}`;
          break;
        case 'Upcoming':
          URL = `${BASE_URL}movie/upcoming?api_key=${API_KEY}&page=${page}`;
          break;
        case 'Top Rated':
          URL = `${BASE_URL}movie/top_rated?api_key=${API_KEY}&page=${page}`;
          break;

        default:
          break;
      }
    } else {
      URL = `${BASE_URL}search/movie?&api_key=${API_KEY}&query=${searchText}&page=${
        +currentPage + 1
      }`;
    }

    let result = await NetworkCall(URL);
    if (!!result) {
      dispatch(setMovieListNextItem(result));
    }
  };
};

export const handelSelectedCatagory = item => {
  return async dispatch => {
    dispatch(setSelectedCatagory(item));

    let URL;
    switch (item) {
      case 'Trending':
        URL = `${BASE_URL}trending/all/day?api_key=${API_KEY}&page=1`;
        break;
      case 'Popular':
        URL = `${BASE_URL}movie/popular?api_key=${API_KEY}&page=1`;
        break;
      case 'Upcoming':
        URL = `${BASE_URL}movie/upcoming?api_key=${API_KEY}&page=1`;
        break;
      case 'Top Rated':
        URL = `${BASE_URL}movie/top_rated?api_key=${API_KEY}&page=1`;
        break;

      default:
        break;
    }

    dispatch(callMovieItem(URL));
  };
};

export const setSelectedCatagory = item => {
  return {
    type: 'SET_SELECTED_CATAGORY',
    payload: item,
  };
};

export const setMovieDetails = detail => {
  return {
    type: 'SET_MOVIE_DETAILS',
    payload: detail,
  };
};

export const callItemDetails = id => {
  return async dispatch => {
    let url = `${BASE_URL}movie/${id}?api_key=${API_KEY}`;
    let result = await NetworkCall(url);
    if (!!result) {
      dispatch(setMovieDetails(result));
    }
  };
};

export const setRelatedMovies = relatedList => {
  return {
    type: 'SET_RELATED_MOVIE_LIST',
    payload: relatedList,
  };
};

export const callItemRelatedMovies = id => {
  return async dispatch => {
    let url = `${BASE_URL}movie/${id}/similar?api_key=${API_KEY}&page=1`;
    let result = await NetworkCall(url);
    if (!!result) {
      dispatch(setRelatedMovies(result));
    }
  };
};

export const toggleRelatedLoader = bool => {
  return {
    type: 'TOGGLE_RELATED_MOVIE_LOADER',
    payload: bool,
  };
};

export const setSearchText = text => {
  return {
    type: 'SET_SEARCH_TEXT',
    payload: text,
  };
};

export const searchMovieItems = text => {
  return async dispatch => {
    dispatch(setSearchText(text));

    if (text == '') {
      let url = `${BASE_URL}trending/all/day?api_key=${API_KEY}&page=1`;
      dispatch(setSelectedCatagory('Trending'));
      dispatch(callMovieItem(url));
    } else {
      let url = `${BASE_URL}search/movie?page=1&api_key=${API_KEY}&query=${text}`;
      dispatch(callMovieItem(url));
    }
  };
};
