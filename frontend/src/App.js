import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Homepage from './pages/Homepage';
import Subfeddit from './pages/Subfeddit';
import Member from './pages/Member';
import PostView from './pages/PostView';

function App() {
  return (
    <div className='App'>
      <Header />

      <Router>
        <Routes>
          <Route exact path='' element={<Homepage />} />
          <Route exact path='/f/:id' element={<Subfeddit />} />
          <Route exact path='/m/:id' element={<Member />} />
          <Route exact path='/f/:id/p/:id' element={<PostView />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
