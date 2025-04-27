import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import NavBar from './components/NavBar';
import Sale from './components/Sale';
import Auth from './pages/Auth';
import GuestRoute from './components/GuestRoute';
import axios from 'axios';
import { useAuthInit } from './stores/useAuthStore';

// Set the base URL for Axios
axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.withCredentials = true; // Send cookies with every request

function App() {
  useAuthInit()
    return (
        <Router>
          <>
           <header>
            <Sale/>
            <NavBar/>
           </header>

           <main>
            <div className='h-[0.5px] bg-black opacity-50 md:mt-10 md:mb-2'/>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
            <Route
    path="/login"
    element={
      <GuestRoute>
        <Auth key="login" />
      </GuestRoute>
    }
  />
  <Route
    path="/register"
    element={
      <GuestRoute>
        <Auth key="register" />
      </GuestRoute>
    }
  />
            </Routes>

           </main>
          </>
      </Router>
    );
  }
  
export default App;
  