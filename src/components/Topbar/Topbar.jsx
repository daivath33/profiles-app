import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import {
  MAIN_ROUTE,
  PROFILE_ROUTE,
  topbarNavigationItems,
} from "../../routes/const";
import { showUserFullName } from "../../utils/user";
import { AiOutlineUser } from "react-icons/ai";
import "./Topbar.scss";

const Topbar = () => {
  const { user } = useContext(UserContext);
  console.log(user);

  return (
    <div className="nav-box">
      <nav className="navigation">
        <Link to={MAIN_ROUTE} className="logo">
          LOGO
        </Link>
        <div className="navigation-items">
          {topbarNavigationItems.map((navItem) => (
            <Link to={navItem.route} key={navItem.title}>
              {navItem.title}
            </Link>
          ))}
        </div>
        <Link to={PROFILE_ROUTE} className="user-container">
          <AiOutlineUser className="topbar-icon" />
          {showUserFullName(user)}
        </Link>
      </nav>
    </div>
  );
};

export default Topbar;
