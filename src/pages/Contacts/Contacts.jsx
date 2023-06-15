import { useState } from "react";
import { Link } from "react-router-dom";
import FormItem from "../../components/FormItem/FormItem";
import Button from "../../components/Button/Button";
import { MAIN_ROUTE } from "../../routes/const";
import "./Contacts.scss";

const Contacts = () => {
  const [email, setEmail] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const messageData = { email, customerName, message };
  };

  return (
    <div className="container">
      <form className="contacts-form" onSubmit={handleSubmit}>
        <FormItem
          label="Email"
          containerClassname="form-item"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <FormItem
          label="Name"
          containerClassname="form-item"
          type="text"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          required
        />
        <FormItem
          label="Message"
          containerClassname="form-item"
          type="text"
          value={customerName}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        {error && <p className="error">{error}</p>}
        <div className="button-container">
          <Button>Send Message</Button>
        </div>
      </form>
    </div>
  );
};

export default Contacts;
