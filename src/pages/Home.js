import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../redux/actions/movieAction";

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRateMovies, upComingMovies } = useSelector(
    (state) => state.movie
  );
  console.log(popularMovies);

  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);
  return <div>Home</div>;
};

export default Home;
