let init = {
  popularMovies: {},
  topRateMovies: {},
  upComingMovies: {},
  loading: true,
  genreList: {},
};

function movieReducer(state = init, action) {
  switch (action.type) {
    case "GET_MOVIES_REQEUSR":
      return { ...state, loading: true };
    case "GET_MOVIE_SUCCESS":
      return {
        ...state,
        popularMovies: action.payload.popularMovies,
        topRateMovies: action.payload.topRateMovies,
        upComingMovies: action.payload.upComingMovies,
        genreList: action.payload.genreList,
        loading: false,
      };
    case "GET_MOVIES_FAILURE":
      return {
        ...state,
        loading: false,
      };
    default:
      return { ...state };
  }
}

export default movieReducer;
