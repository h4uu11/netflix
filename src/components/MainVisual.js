import React from "react";
import { Link } from "react-router-dom";

const MainVisual = ({ movie }) => {
  return (
    <div
      className="main_visual"
      style={{
        backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie.backdrop_path})`,
      }}
    >
      <div className="info">
        <div className="inner">
          <div className="title">{movie.title}</div>
          <div className="desc">{movie.overview}</div>
          <div className="btn_wrap">
            <Link to={""} className="btn_link">
              상세정보
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainVisual;
