import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage/HomePage';
import Header from './components/Header/Header';
import ChooseFildAdmin from './components/ChooseFildAdmin/ChooseFildAdmin';

function App() {


  return (
    <Router>
    <div style={{ margin: 0, padding: 0 }}>
      <Header />
      {/* <ChooseFildAdmin /> */}
      <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/booking" element={<BookingPage />} /> */}
            {/* <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/bookingByUse" element={<BookingPageUser />} /> */}
          </Routes>
        </main>
    </div>
    </Router>
  );
}

export default App
