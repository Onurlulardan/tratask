import React from 'react';
import Home from './view/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import './assets/global.css';

import left from './assets/img/Left.svg';
import right from './assets/img/Right.svg';

function App() {
  return (
    <section className="App">
      <Header/>
      <div className="leftAndRight">
          <img src={left} />
          <img src={right} />
      </div>
      <Home/>
      <Footer/>
    </section>
  );
}

export default App;
