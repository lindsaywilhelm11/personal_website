import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Components
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="App">
      <Router>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/portfolio'}>Portfolio</Link>
        <Link to={'/contact'}>Contact</Link>
      <Routes>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/portfolio' component={Portfolio}/>
        <Route path='/contact' component={Contact}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
