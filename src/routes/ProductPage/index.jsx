import { Link } from "react-router-dom";
import { CartProvider } from "../../context/cart";
import { Cart } from "../../components/Cart/CartComponent";
import { Header } from "../../components/Header/HeaderComponent";
import { useProducts } from "../../hooks/useProducts";
import { useLocation } from "react-router-dom";
import { Spinner } from "../../components/Spinner";
import { AddToCartButton } from "./AddToCartButton";
import "./Product.css";
import axios from "axios";

export const ProductPage = () => {
  const { product } = useProducts();
  const location = useLocation();
  const state = location.state;
  const { id, title, description, price, thumbnail } = state;
  const mlProd = {
    title: title,
    category: "test",
    description: description,
    image: thumbnail,
    price: price,
  };

  return (
    <CartProvider>
      {!product.length === 0 ? (
        <Spinner />
      ) : (
        <>
          <div>
            <div className="header-container">
              <div>
                <Link to={"/HomePage"}>
                  <button>return ←</button>
                </Link>
              </div>
              <div className="product-header">
                <Header />
              </div>
              <Cart />
            </div>
            <div className="product-page">
              <div className="product-image-container">
                <img src={thumbnail} alt="" className="product-image" />
              </div>
              <div className="product-details">
                <div className="product-details-header">
                  <h2 className="product-name">{title}</h2>
                  <p className="product-price">Price ${price}</p>
                </div>
                <div className="product-description">
                  <p>{description}</p>
                </div>
                <AddToCartButton product={state} />
                <button
                  onClick={() =>
                    axios
                      .post("http://localhost:3001/payment", mlProd)
                      .then(
                        (res) =>
                          (window.location.href =
                            res.data.response.body.init_point)
                      )
                  }
                >
                  Buy it Now!
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </CartProvider>
  );
};
