import "./SupplierCard.css";

function SupplierCard() {
  return (
    <div className="supplier-card">

      <div className="supplier-header">
        <div className="company-logo">
          R
        </div>

        <div>
          <h4>Supplier</h4>
          <p>Guanjoi Trading LLC</p>
        </div>
      </div>

      <hr />

      <p>🇩🇪 Germany, Berlin</p>
      <p>✔️ Verified Seller</p>
      <p>🌐 Worldwide Shipping</p>

      <button className="send-btn">
        Send Inquiry
      </button>

      <button className="profile-btn">
        Seller's Profile
      </button>

    </div>
  );
}

export default SupplierCard;