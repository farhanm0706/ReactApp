// App.js
import React from 'react';
import Header from './components/Header';
import NavBar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MainContainer from './components/Maincontainer';
import './App.css'; // Import your CSS file

const App = () => {
  return (
    <div className="app">
      <Header />
      <NavBar />
      <div className="container">
        <Sidebar />
        <MainContainer />
      </div>
    </div>
  );
};

export default App;
