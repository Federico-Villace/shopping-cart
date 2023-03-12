import { supabase } from "../../utils/supabaseClient";
import { useNavigate } from "react-router";

export const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    supabase.auth.signOut();
    return navigate("/");
  };
  return (
    <button type="button" className="button" onClick={handleLogout}>
      Sign Out
    </button>
  );
};
