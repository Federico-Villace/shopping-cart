import { useEffect, useState } from "react";
import { supabase } from "../../utils/supabaseClient";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./auth.css";
const redirectTo = "/Account";

export function Auth() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [toastify, setToastify] = useState(false);

  const sentMaginLinkMessage = () =>
    toast.success("Magic Link Sent! Checkout your Email", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });

  const handleLogin = async (e) => {
    e.preventDefault();
    sentMaginLinkMessage();
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
        {loading && (
          <>
            <p style={{ minHeight: "100px" }}>"Sending magic link..."</p>
          </>
        )}
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
