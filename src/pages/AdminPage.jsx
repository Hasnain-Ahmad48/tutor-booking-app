import {  useState } from "react";
import { getBookings, saveBookings } from "../utils/localStorage";

const AdminPage = () => {
  const [bookings, setBookings] = useState(() => getBookings());
  const [filterDate, setFilterDate] = useState("");



  const handleStatusChange = (id, newStatus) => {
    const updatedBookings = bookings.map((booking) =>
      booking.id === id
        ? { ...booking, status: newStatus }
        : booking
    );

    setBookings(updatedBookings);
    saveBookings(updatedBookings);
  };

  const filteredBookings = filterDate
    ? bookings.filter((b) => b.date === filterDate)
    : bookings;

  return (
    <div className="container">
      <h1>Admin Dashboard</h1>

      <div style={{ marginBottom: "20px" }}>
        <label>Filter by Date: </label>
        <input
          type="date"
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
        />
      </div>

      {filteredBookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Time Slot</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredBookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.name}</td>
                <td>{booking.date}</td>
                <td>{booking.slot}</td>
                <td>
                  <select
                    value={booking.status}
                    onChange={(e) =>
                      handleStatusChange(
                        booking.id,
                        e.target.value
                      )
                    }
                  >
                    <option value="Pending">Pending</option>
                    <option value="Approved">Approved</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminPage;
