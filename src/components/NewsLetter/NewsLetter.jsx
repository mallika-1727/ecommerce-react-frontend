import "./Newsletter.css";

function Newsletter() {
  return (
    <section className="newsletter">

      <h2>Subscribe on our newsletter</h2>

      <p>
        Get daily news on upcoming offers from many suppliers all over the world.
      </p>

      <div className="newsletter-form">
        <input
          type="email"
          placeholder="Email"
        />

        <button>Subscribe</button>
      </div>

    </section>
  );
}

export default Newsletter;