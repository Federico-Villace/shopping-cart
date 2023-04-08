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
          {!session ? (
            <div className="header-div">
              <Link
                to={"/Authorization"}
                style={{ textDecorationLine: "none" }}
              >
                <label className="label">Sign In</label>
              </Link>
            </div>
          ) : (
            <div className="header-div">
              <label>{username}</label>
              <Link to="/Account">
                <UserIcon />
              </Link>
            </div>
          )}
          {session && (
            <>
              <div className="header-div">
                <label>logout</label>
                <LogoutButton />
              </div>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};
