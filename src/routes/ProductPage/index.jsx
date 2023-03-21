import { CartProvider } from "../../context/cart";
import { Cart } from "../../components/Cart/CartComponent";
import { Header } from "../../components/Header/HeaderComponent";
import { useProducts } from "../../hooks/useProducts";
import { useLocation } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { Spinner } from "../../components/Spinner";
import "./Product.css";
import { AddToCart } from "./AddToCart";

export const ProductPage = () => {
  const { product } = useProducts();
  const location = useLocation();
  const state = location.state;
  const { id, title, description, price, thumbnail } = state;

  return (
    <CartProvider>
      {!product.length === 0 ? (
        <Spinner />
      ) : (
        <>
          <Cart />
          <div>
            <div className="header-container">
              <div className="product-header">
                <Header />
              </div>
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
                <AddToCart product={state} />
              </div>
            </div>
          </div>
        </>
      )}
    </CartProvider>
  );
};
