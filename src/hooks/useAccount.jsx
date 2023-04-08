import { useState, useEffect } from "react";
import { supabase } from "../utils/supabaseClient";
import { useSession } from "./useSession";

export const useAccount = () => {
  const { session } = useSession();
  const [update, setUpdate] = useState(false);
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(null);
  const [name, setName] = useState(null);
  const [last_name, setLastName] = useState(null);

  useEffect(() => {
    getProfile();
  }, [session]);

  const getProfile = async () => {
    try {
      setLoading(true);
      const { user } = session;

      let { data, error, status } = await supabase
        .from("profiles")
        .select(`username, name, last_name`)
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUsername(data.username);
        setName(data.name);
        setLastName(data.last_name);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { user } = session;

      const updates = {
        id: user.id,
        username,
        name,
        last_name,
      };

      let { error } = await supabase.from("profiles").upsert(updates);

      if (error) {
        throw error;
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
      setUpdate(!update);
    }
  };

  return {
    username,
    setUsername,
    name,
    setName,
    last_name,
    setLastName,
    loading,
    session,
    updateProfile,
    getProfile,
    update,
    setUpdate,
  };
};
