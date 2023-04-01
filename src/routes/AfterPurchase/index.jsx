import "./AfterPurchase.css";
import { Link } from "react-router-dom";

export const AfterPurchase = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const collectionStatus = urlParams.get("collection_status");
  const paymentId = urlParams.get("payment_id");
  const merchantOrderId = urlParams.get("merchant_order_id");

  const obj = {
    collection_status: collectionStatus,
    payment_id: paymentId,
    merchant_order_id: merchantOrderId,
  };

  return (
    <div className="checkout-container">
      <h2 className="checkout-title">Thank you very much for your purchase!</h2>
      <div className="products-container">
        <p>collection_status: {obj.collection_status}</p>
        <p>payment_id{obj.payment_id}</p>
        <p>merchant_order_id{obj.merchant_order_id}</p>
      </div>
      <p className="total-price">Return to Home Page! </p>
      <Link to={"/HomePage"}>
        <button> Return</button>
      </Link>
    </div>
  );
};
