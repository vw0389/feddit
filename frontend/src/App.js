import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Header from './components/Header';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className='App'>
      <Header />
      <Homepage />
      <Router>
        <Routes>
          <Route exact path='' />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
