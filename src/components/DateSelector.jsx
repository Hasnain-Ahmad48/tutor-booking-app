const DateSelector = ({ selectedDate, setSelectedDate }) => {
  const today = new Date().toISOString().split("T")[0];

  return (
    <div style={{ margin: "20px 0" }}>
      <label>Select Date: </label>
      <input
        type="date"
        min={today}
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      />
    </div>
  );
};

export default DateSelector;
