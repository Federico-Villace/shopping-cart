import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./landing.css";

export const Landing = () => {
  useEffect(() => {
    () => window.reload();
  }, []);

  return (
    <div className="background">
      <ul className="ul">
        <li>
          <h1>Shopping Never been so easy!</h1>
          <h4>
            Find the product that best suits you and get it in your home with
            the fastest shipment.
          </h4>
        </li>
      </ul>
      <div className="button-container">
        <Link to={"/HomePage"}>
          <button>Shop now!</button>
        </Link>
      </div>
    </div>
  );
};
