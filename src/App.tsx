import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Home from './comp/home/home'
import NavBar from './comp/nav/Nav';

function App() {
  return (
    <div className='App'>
        <NavBar />
        <Home />
    </div>
  );
}

export default App;
