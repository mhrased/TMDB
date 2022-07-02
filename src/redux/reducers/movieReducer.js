const initialState = {
  loaderMovie: true,
  movieList: [],
  backupList: [],
  searchText: '',
  currentPage: 1,
  totalPages: 2,
  refreshList: false,

  // Catagory List
  catagories: ['Trending', 'Popular', 'Upcoming', 'Top Rated'],
  selectedCatagory: 'Trending',

  // Selected Item Details
  movieDetails: null,
  relatedMovie: [],
  relatedMovieLoader: true,
  loadingBottom: false,
};

const movieReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case 'SET_MOVIE_LIST':
      return {
        ...state,
        movieList: actions.payload.results,
        backupList: actions.payload.results,
        currentPage: actions.payload.page,
        totalPages: actions.payload.total_pages,
        loaderMovie: false,
        refreshList: false,
      };
    case 'SET_MOVIE_LIST_NEXT_ITEM':
      console.log(actions.payload.page);
      return {
        ...state,
        movieList: [...state.movieList, ...actions.payload.results],
        backupList: [...state.backupList, ...actions.payload.results],
        currentPage: actions.payload.page,
        loadingBottom: false,
      };

    case 'SET_SEARCH_TEXT':
      return {
        ...state,
        searchText: actions.payload,
      };

    case 'TOGGLE_REFRESH_ITEMS':
      return {
        ...state,
        refreshList: actions.payload,
      };

    case 'SET_SELECTED_CATAGORY':
      return {
        ...state,
        selectedCatagory: actions.payload,
        loaderMovie: true,
      };

    case 'SET_MOVIE_DETAILS':
      return {
        ...state,
        movieDetails: actions.payload,
      };

    case 'SET_RELATED_MOVIE_LIST':
      return {
        ...state,
        relatedMovie: actions.payload.results,
        relatedMovieLoader: false,
      };
    case 'TOGGLE_RELATED_MOVIE_LOADER':
      return {
        ...state,
        relatedMovieLoader: actions.payload,
      };
    case 'TOGGLE_LOADER_BOTTOM':
      return {
        ...state,
        loadingBottom: actions.payload,
      };

    default:
      return state;
  }
};

export default movieReducer;
