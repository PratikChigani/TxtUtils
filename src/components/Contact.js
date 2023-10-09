import React from "react";

function Contact(props) {
  return (
    <div
      className={`container my-5 text-${
        props.mode === "light" ? "dark" : "light"
      }`}
    >
      <h2>Contact Us</h2>
      <p>
        If you have any questions, feedback, or need assistance, please feel
        free to get in touch with us. We're here to help!
      </p>

      <h3>Contact Information:</h3>
      <ul>
        <li>
          <strong>Email:</strong> contact@example.com
        </li>
        <li>
          <strong>Phone:</strong> +1 (123) 456-7890
        </li>
        <li>
          <strong>Address:</strong> 123 Main Street, City, Country
        </li>
      </ul>

      <h3>Send Us a Message:</h3>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input className="m-3" type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            className="m-3"
            vtype="email"
            id="email"
            name="email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required />
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
