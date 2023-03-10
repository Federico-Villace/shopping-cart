import { useState, useEffect } from "react";
import { supabase } from "../utils/supabaseClient";

export const useSession = () => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    if (!session) {
      supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session);
      });
    }

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, [session]);

  return { session };
};
