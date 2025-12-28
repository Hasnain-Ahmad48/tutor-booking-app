import { TIME_SLOTS } from "../utils/slots";

const SlotList = ({
  selectedDate,
  bookings,
  selectedSlot,
  setSelectedSlot,
}) => {
  const bookedSlots = bookings
    .filter((b) => b.date === selectedDate)
    .map((b) => b.slot);

  return (
    <div>
      <h3>Available Time Slots</h3>

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {TIME_SLOTS.map((slot) => {
          const isBooked = bookedSlots.includes(slot);
          const isSelected = selectedSlot === slot;

          return (
            <button
              key={slot}
              disabled={isBooked}
              onClick={() => setSelectedSlot(slot)}
              style={{
                padding: "10px",
                backgroundColor: isBooked
                  ? "#ccc"
                  : isSelected
                  ? "#2196F3"
                  : "#4CAF50",
                color: "#fff",
                border: "none",
                cursor: isBooked ? "not-allowed" : "pointer",
              }}
            >
              {slot}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SlotList;
