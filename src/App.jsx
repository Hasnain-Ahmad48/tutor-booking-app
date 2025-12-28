import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import BookingPage from "./pages/BookingPage";
import AdminPage from "./pages/AdminPage";

function App() {
  return (
    <BrowserRouter>
      <nav className="nav">
        <Link to="/">Booking</Link>
        <Link to="/admin">Admin</Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={<BookingPage />}
        />
        <Route
          path="/admin"
          element={<AdminPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
