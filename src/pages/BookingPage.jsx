import {useState} from "react";
import DateSelector from "../components/DateSelector";
import SlotList from "../components/SlotList";
import BookingForm from "../components/BookingForm";
import {getBookings, saveBookings} from "../utils/localStorage";

const BookingPage = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [bookings, setBookings] = useState(() => getBookings());

  const handleNewBooking = booking => {
    const updatedBookings = [...bookings, booking];
    setBookings(updatedBookings);
    saveBookings(updatedBookings);
    setSelectedSlot("");
  };

  return (
    <div className="container">
      <h1>Tutor Mentoring Session Booking</h1>

      <DateSelector
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />

      {selectedDate && (
        <SlotList
          selectedDate={selectedDate}
          bookings={bookings}
          selectedSlot={selectedSlot}
          setSelectedSlot={setSelectedSlot}
        />
      )}

      {selectedSlot && (
        <BookingForm
          date={selectedDate}
          slot={selectedSlot}
          onConfirm={handleNewBooking}
        />
      )}
    </div>
  );
};

export default BookingPage;
