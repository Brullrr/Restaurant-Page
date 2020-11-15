import React from 'react';
import './App.css';
import Restaurant from './Restaurant/Restaurant';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Restaurant />
    </BrowserRouter>
    
  );
}

export default App;
