import React from 'react';

import { Footer, Blog, Possibility, Features, WhatProject1, Header } from './containers';
import { CTA, Brand, Navbar } from './components';
import './App.css';


const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
        <Brand />
        <WhatProject1 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div>
  );
}

export default App;
