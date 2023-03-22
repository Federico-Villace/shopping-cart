import { useState } from "react";
import { supabase } from "../../utils/supabaseClient";
import "./auth.css";
const redirectTo = "/Account";

export function Auth() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithOtp(
        { email },
        { redirectTo }
      );
      if (error) throw error;
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-card body">
      <div className="" aria-live="polite">
        <h1 className="">LS Technologies Login</h1>
        <p className="" style={{ textAlign: "center" }}>
          Sign in via magic link with your email below
        </p>
        {loading ? (
          <>
            <p style={{ minHeight: "100px" }}>"Sending magic link..."</p>
          </>
        ) : (
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
        )}
      </div>
    </div>
  );
}
