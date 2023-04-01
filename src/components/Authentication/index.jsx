import { useEffect, useState } from "react";
import { supabase } from "../../utils/supabaseClient";
import { ToastContainer } from "react-toastify";
import {
  sentMaginLinkMessage,
  sendingMagicLinkMessage,
  failedMagicLink,
} from "../../utils/Toastify";
import "react-toastify/dist/ReactToastify.css";
import "./auth.css";
const redirectTo = "/Account";

export function Auth() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [toastify, setToastify] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithOtp(
        { email },
        { redirectTo }
      );
      if (error) throw error;
      if (!error) {
        sentMaginLinkMessage();
      }
    } catch (error) {
      if (error) {
        failedMagicLink();
      }
      console.log(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setToastify(true);
  }, [toastify]);

  return (
    <div className="auth-card body">
      <div className="" aria-live="polite">
        <h1 className="">LS Technologies Login</h1>
        <p className="" style={{ textAlign: "center" }}>
          Sign in via magic link with your email below
        </p>
        {loading && <ToastContainer />}
        {toastify && <ToastContainer />}
        <>
          <form className="form" onSubmit={handleLogin}>
            <label htmlFor="email" style={{ color: "white" }}>
              Email
            </label>
            <input
              id="email"
              className=""
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="" aria-live="polite">
              Send magic link
            </button>
          </form>
        </>
      </div>
    </div>
  );
}
