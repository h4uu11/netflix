import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header">
        <Link to={"/"}>LOGO</Link>
        <div className="menu">
          <Link to={"/movies"}>Movie</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
