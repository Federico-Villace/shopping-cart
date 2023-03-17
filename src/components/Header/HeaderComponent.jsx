import { Link } from "react-router-dom";
import { UserIcon } from "../icons";
import { useAccount } from "../../hooks/useAccount";
import { useSession } from "../../hooks/useSession";
import { LogoutButton } from "../Buttons/LogoutButton";
import "./headers.css";

export const Header = () => {
  const { username } = useAccount();
  const { session } = useSession();

  return (
    <header>
      <nav>
        <ul className="header-nav">
          <li className="header-li">
            <label>{username}</label>
          </li>
          {!session ? (
            <li className="header-li">
              <Link
                to={"/Authorization"}
                style={{ textDecorationLine: "none" }}
              >
                <label className="label">Sign In</label>
              </Link>
            </li>
          ) : (
            <li className="header-li">
              <Link to="/Account">
                <UserIcon />
              </Link>
            </li>
          )}
          {session && (
            <>
              <li className="header-li">
                <label>logout</label>
              </li>

              <li>
                <LogoutButton />
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};
