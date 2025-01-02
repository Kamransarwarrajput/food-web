import React from "react";

const contact = () => {
  return (
    <div>

      <section className="contact-form">
        <h2 className="fade-in">Contact</h2>
        <form>
          <input type="text" placeholder="Enter your Name" required />
          <input type="email" placeholder="Enter your Email" required />
          <input type="text" placeholder="Enter your Number" required />
          <input type="text" placeholder="Enter your Address" />
          <textarea
            placeholder="your valued feedback"
            rows={5}
            required
          ></textarea>
          <button type="submit">Send </button>
        </form>
      </section>
    </div>
  );
};

export default contact;
