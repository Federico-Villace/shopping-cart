import { Link } from "react-router-dom";
import { UserIcon } from "../icons";
import { useAccount } from "../../hooks/useAccount";
import "./headers.css";

export const Header = () => {
  const { username } = useAccount();
  return (
    <header>
      <nav>
        <ul className="header-nav">
          <li className="header-li">
            <label>{username}</label>
          </li>
          <li className="header-li">
            <Link to="/Account">
              <UserIcon />
            </Link>
          </li>
          <li></li>
        </ul>
      </nav>
      <h1>LS Technologies 🛒</h1>
    </header>
  );
};
