import React from "react";
import App from "./../../App";
import { Auth } from "../../components/Authentication";
import { useSession } from "../../hooks/useSession";

export const Root = () => {
  const { session } = useSession();

  return <div className="container">{!session ? <Auth /> : <App />}</div>;
};
