import "./Newsletter.css";
import { useState } from "react";

function Newsletter() {

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubscribe = () => {

    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Invalid Email");
      return;
    }

    setError("");
    alert("Subscribed Successfully 🎉");
    setEmail("");
  };

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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button onClick={handleSubscribe}>
          Subscribe
        </button>

      </div>

      {error && (
        <p className="newsletter-error">
          {error}
        </p>
      )}

    </section>
  );
}

export default Newsletter;