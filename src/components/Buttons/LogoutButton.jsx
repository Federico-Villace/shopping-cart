import { supabase } from "../../utils/supabaseClient";
import { useNavigate } from "react-router";
import { LogOutIcon } from "../icons";

export const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    supabase.auth.signOut();
    return navigate("/");
  };
  return (
    <a onClick={handleLogout}>
      <LogOutIcon />
    </a>
  );
};
