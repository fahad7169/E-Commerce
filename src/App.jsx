import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import NavBar from './components/NavBar';
import Sale from './components/Sale';
import Auth from './pages/Auth';

function App() {
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
            <Route path='/login' element={<Auth key="login"/>}/>
            <Route path='/register' element={<Auth key="register"/>}/>
            </Routes>

           </main>
          </>
      </Router>
    );
  }
  
export default App;
  