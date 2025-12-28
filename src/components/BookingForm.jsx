import { useState } from "react";

const BookingForm = ({ date, slot, onConfirm }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !phone) {
      alert("Please fill all fields");
      return;
    }

    const newBooking = {
      id: Date.now(),
      name,
      email,
      phone,
      date,
      slot,
      status: "Pending",
    };

    onConfirm(newBooking);

    setName("");
    setEmail("");
    setPhone("");

    alert("Booking confirmed!");
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Confirm Booking</h3>
      <p>
        <strong>Date:</strong> {date} <br />
        <strong>Time:</strong> {slot}
      </p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <button type="submit" style={{ marginTop: "10px" }}>
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
