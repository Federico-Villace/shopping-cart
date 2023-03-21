import { CartProvider } from "../../context/cart";
import { Cart } from "../../components/Cart/CartComponent";
import { Header } from "../../components/Header/HeaderComponent";
import { useProducts } from "../../hooks/useProducts";
import { useLocation } from "react-router-dom";
import { Spinner } from "../../components/Spinner";
import "./Product.css";

export const ProductPage = () => {
  const { product } = useProducts();
  const location = useLocation();
  const state = location.state;
  const { id, title, description, price, thumbnail } = state;

  return (
    <>
      {!product.length === 0 ? (
        <Spinner />
      ) : (
        <CartProvider>
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
                <h2 className="product-name">{title}</h2>
                <div className="product-description">
                  <p>{description}</p>
                </div>
                <div className="product-price-container">
                  <p className="product-price">Price ${price}</p>
                  <button className="product-button">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </CartProvider>
      )}
    </>
  );
};
