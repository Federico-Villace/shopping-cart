import { useState } from "react";
import { supabase } from "../../utils/supabaseClient";
import "./auth.css";

export function Auth() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithOtp({ email });
      if (error) throw error;
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="row flex-center flex auth-card body">
      <div className="col-6 form-widget" aria-live="polite">
        <h1 className="header">LS Technologies Login</h1>
        <p className="description" style={{ textAlign: "center" }}>
          Sign in via magic link with your email below
        </p>
        {loading ? (
          <p>"Sending magic link..."</p>
        ) : (
          <form className="form" onSubmit={handleLogin}>
            <label htmlFor="email" style={{ color: "white" }}>
              Email
            </label>
            <input
              id="email"
              className="inputField"
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="button block" aria-live="polite">
              Send magic link
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
