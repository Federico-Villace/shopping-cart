import React from "react";
import App from "../App";
import { Auth } from "../components/Authentication";
import { useSession } from "../hooks/useSession";

export const Root = () => {
  const { session } = useSession();

  return (
    <div className="container" style={{ padding: "50px 0 100px 0" }}>
      {!session ? <Auth /> : <App />}
    </div>
  );
};
