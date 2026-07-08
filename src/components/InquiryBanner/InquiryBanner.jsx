import "./InquiryBanner.css";

function InquiryBanner() {
  return (
    <section className="inquiry-banner">

      <div className="banner-content">
        <h2>An easy way to send requests to all suppliers</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt.
        </p>
      </div>

      <div className="inquiry-form">
        <h3>Send quote to suppliers</h3>

        <input
          type="text"
          placeholder="What item you need?"
        />

        <textarea
          placeholder="Type more details"
          rows="4"
        ></textarea>

        <div className="form-row">
          <input
            type="number"
            placeholder="Quantity"
          />

          <select>
            <option>Pcs</option>
          </select>
        </div>

        <button>Send Inquiry</button>
      </div>

    </section>
  );
}

export default InquiryBanner;