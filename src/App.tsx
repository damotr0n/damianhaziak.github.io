import React from 'react';
import logo from './logo.svg';
import './style.scss';
import Navbar from './components/Navbar';
import HomeContent from './components/HomeContent';
import ContentPage from './components/ContentPage';

function App() {

  let homeContent = {
    id: "home",
    content: <HomeContent />
  }

  return (
    <div className="App">
        <Navbar />
        <ContentPage id={homeContent.id} content={homeContent.content} />
    </div>
  );
}

export default App;
