import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="inner">
          <div className="left">
            <Link to={process.env.PUBLIC_URL} className="logo">
              <img
                src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
                alt=""
              />
            </Link>
            <div className="menu">
              <Link to={process.env.PUBLIC_URL}>홈</Link>
              <Link to={"/movies"}>영화</Link>
            </div>
          </div>
          <div className="right">
            <div className="search">
              <input type="text" placeholder="제목을 검색하세요." />
              <button
                onClick={() => {
                  document.querySelector(".search").classList.toggle("on");
                }}
              >
                <SearchIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
