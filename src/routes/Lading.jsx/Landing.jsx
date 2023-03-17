import { Link } from "react-router-dom";
import "./landing.css";

export const Landing = () => {
  return (
    <div className="background">
      <ul className="ul">
        <li>
          <h1>Shopping Never been so easy</h1>
        </li>
        <li>
          <h4>
            Find the product that best suits you and get it in your home with
            the fastest shipment.
          </h4>
        </li>
        <li>
          <Link to={"/"}>
            <button>Shop now!</button>
          </Link>
        </li>
      </ul>
    </div>
  );
};
