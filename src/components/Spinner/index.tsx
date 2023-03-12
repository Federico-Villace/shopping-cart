import React from "react";
import { useState, CSSProperties } from "react";
import PulseLoader from "react-spinners/PulseLoader";

const override: CSSProperties = {
  display: "flex",
  margin: "0 auto",
  justifyContent: "center",
};

export const Spinner = () => {
  const [loading] = useState(true);
  const [color] = useState("#36d7b7");

  return (
    <div className="sweet-loading">
      <PulseLoader color={color} loading={loading} cssOverride={override} />
    </div>
  );
};
