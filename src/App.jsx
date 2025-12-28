import {BrowserRouter, Routes, Route} from "react-router-dom";
import BookingPage from "./pages/BookingPage";
import AdminPage from "./pages/AdminPage";

function App() {
  return (
    <BrowserRouter>
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
