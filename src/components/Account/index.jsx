import { useState, useEffect } from "react";
import { useAccount } from "../../hooks/useAccount";
import { useSession } from "../../hooks/useSession";
import { Spinner } from "../Spinner";
import { Header } from "../Header/HeaderComponent";
import { ReturnButton } from "../Buttons/ReturnButton";

export const Account = () => {
  const [update, setUpdate] = useState(false);
  const { session } = useSession();

  const {
    username,
    setUsername,
    website,
    setWebsite,
    loading,
    updateProfile,
    getProfile,
  } = useAccount();

  useEffect(() => {
    getProfile();
  }, [session]);

  const handleButtonUpdate = (e) => {
    e.preventDefault();
    setUpdate(!update);
  };

  return !session ? (
    <Spinner />
  ) : (
    <div>
      {loading ? (
        "Saving ..."
      ) : (
        <>
          <Header />

          <form onSubmit={updateProfile} className="form-widget">
            <div>
              <label>Email</label>
              {session.user.email}
            </div>
            {update ? (
              <>
                <div>
                  <label htmlFor="username">Name</label>

                  <input
                    id="username"
                    type="text"
                    value={username || ""}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="website">Website</label>
                  <input
                    id="website"
                    type="url"
                    value={website || ""}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </div>
                <div>
                  <span>
                    <button onChange={() => setUpdate(!update)}>Confirm</button>
                  </span>
                </div>
              </>
            ) : (
              <>
                <div>
                  <label htmlFor="username">Name</label>

                  {username}
                </div>
                <div>
                  <label htmlFor="website">Website</label>
                  {website}
                </div>
              </>
            )}

            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                className="button primary"
                disabled={loading}
                onClick={(e) => handleButtonUpdate(e)}
              >
                Update profile
              </button>
            </div>
            <ReturnButton />
          </form>
        </>
      )}
    </div>
  );
};
