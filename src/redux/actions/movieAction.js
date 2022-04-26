import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY;

function getMovies() {
  return async (dispatch) => {
    try {
      // 데이터 도착 전
      dispatch({ type: "GET_MOVIES_REQUEST" });
      const popularMovieApi = api.get(
        `/movie/popular?api_key=${API_KEY}&language=ko-KO&page=1`
      );
      const topRateMovieApi = api.get(
        `/movie/top_rated?api_key=${API_KEY}&language=ko-KO&page=1`
      );
      const upComingMovieApi = api.get(
        `/movie/upcoming?api_key=${API_KEY}&language=ko-KO&page=1`
      );
      const genreApi = api.get(
        `/genre/movie/list?api_key=${API_KEY}&language=ko`
      );

      let [popularMovies, topRateMovies, upComingMovies, genreList] =
        await Promise.all([
          popularMovieApi,
          topRateMovieApi,
          upComingMovieApi,
          genreApi,
        ]);
      // 데이터 도착 후
      dispatch({
        type: "GET_MOVIE_SUCCESS",
        payload: {
          popularMovies: popularMovies.data,
          topRateMovies: topRateMovies.data,
          upComingMovies: upComingMovies.data,
          genreList: genreList.data.genres,
        },
      });
    } catch (error) {
      dispatch({ type: "GET_MOVIES_FAILURE" });
    }
  };
}
export const movieAction = {
  getMovies,
};
