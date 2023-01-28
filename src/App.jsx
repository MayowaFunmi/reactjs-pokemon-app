import React from 'react';
import './components/style.css';
import Main from './components/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PokeInfo from './components/PokeInfo';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/pokemon_details" element={<PokeInfo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
