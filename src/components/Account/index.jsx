import { useEffect } from "react";
import { supabase } from "../../utils/supabaseClient";
import { useAccount } from "../../hooks/useAccount";
import { useSession } from "../../hooks/useSession";
import { Spinner } from "../Spinner";

export const Account = () => {
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

  return !session ? (
    <Spinner />
  ) : (
    <div aria-live="polite">
      {loading ? (
        "Saving ..."
      ) : (
        <form onSubmit={updateProfile} className="form-widget">
          <div>Email: {session.user.email}</div>
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
            <button className="button primary block" disabled={loading}>
              Update profile
            </button>
          </div>
        </form>
      )}
      <button
        type="button"
        className="button block"
        onClick={() => supabase.auth.signOut()}
      >
        Sign Out
      </button>
    </div>
  );
};
