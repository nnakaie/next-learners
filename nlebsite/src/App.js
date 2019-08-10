import React from 'react';
import './App.scss';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import News from './components/News/News';
import WhatSurala from './components/WhatSurala/WhatSurala';
import Value from './components/Value/Value';
import SuralaNinja from './components/SuralaNinja/SuralaNinja';
import Features from './components/Features/Features';


function App() {
  return (
    <div className="Home">
        <Header />
        <Hero />
        <News />
        <WhatSurala />
        <Value />
        <SuralaNinja />
        <Features />
    </div>
  );
}

export default App;
