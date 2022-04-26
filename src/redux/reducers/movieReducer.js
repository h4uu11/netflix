let init = {
  popularMovies: {},
  topRateMovies: {},
  upComingMovies: {},
};

function movieReducer(state = init, action) {
  switch (action.type) {
    case "GET_MOVIE_SUCCESS":
      return {
        ...state,
        popularMovies: action.payload.popularMovies,
        topRateMovies: action.payload.topRateMovies,
        upComingMovies: action.payload.upComingMovies,
      };
    default:
      return { ...state };
  }
}

export default movieReducer;
