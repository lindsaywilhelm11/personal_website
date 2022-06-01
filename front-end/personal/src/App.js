import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// Components
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/portfolio' element={<Portfolio />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
