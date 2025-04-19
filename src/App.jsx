import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Auth from './pages/Auth';
import NavBar from './components/NavBar';

function App() {
    return (
        <Router>
           <header>
            <NavBar/>
           </header>

           <main>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
            <Route path='/auth' element={<Auth />} />
            </Routes>

           </main>
      </Router>
    );
  }
  
export default App;
  