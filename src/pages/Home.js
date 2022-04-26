import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainConSlide from "../components/MainConSlide";
import MainVisual from "../components/MainVisual";
import { movieAction } from "../redux/actions/movieAction";

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRateMovies, upComingMovies, loading } = useSelector(
    (state) => state.movie
  );

  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, [dispatch]);

  if (loading) {
    return (
      <>
        <div className="loading">
          <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <MainVisual movie={popularMovies.results[1]} />
      <div className="mainSubVisual">
        <div className="con_title">인기있는 영화</div>
        <MainConSlide movies={popularMovies} />
        <div className="con_title">곧 개봉하는 영화</div>
        <MainConSlide movies={upComingMovies} />
        <div className="con_title">평점이 좋은 영화</div>
        <MainConSlide movies={topRateMovies} />
      </div>
    </>
  );
};

export default Home;
