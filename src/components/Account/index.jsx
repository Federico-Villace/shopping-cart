import { useAccount } from "../../hooks/useAccount";
import { useSession } from "../../hooks/useSession";
import { Spinner } from "../Spinner";
import { Header } from "../Header/HeaderComponent";
import { ReturnButton } from "../Buttons/ReturnButton";
import "./account.css";

export const Account = () => {
  const { session } = useSession();
  const {
    username,
    setUsername,
    name,
    setName,
    last_name,
    setLastName,
    loading,
    updateProfile,
    update,
    setUpdate,
  } = useAccount();

  const handleButtonUpdate = (e) => {
    e.preventDefault();
    setUpdate(!update);
  };

  return !session ? (
    <Spinner />
  ) : (
    <div className="container">
      {loading ? (
        "Saving ..."
      ) : (
        <div>
          <Header />
          <div className="profile-card">
            <div>
              <h2>Account Profile</h2>
            </div>
            <form onSubmit={updateProfile} className="form-widget">
              <div>
                <label>Email</label>
                {session.user.email}
              </div>
              {update ? (
                <>
                  <div>
                    <label htmlFor="username">Username</label>

                    <input
                      id="username"
                      type="text"
                      value={username || ""}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="name">Name</label>
                    <input
                      id="name"
                      type="text"
                      value={name || ""}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="last_name">Last Name</label>
                    <input
                      id="last_name"
                      type="text"
                      value={last_name || ""}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <span>
                      <button>Confirm</button>
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <label htmlFor="username">Username</label>
                    {username}
                  </div>
                  <div>
                    <label htmlFor="website">Name</label>
                    {name}
                  </div>
                  <div>
                    <label htmlFor="website">Last Name</label>
                    {last_name}
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
          </div>
        </div>
      )}
    </div>
  );
};
