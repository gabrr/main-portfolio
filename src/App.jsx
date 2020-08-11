import React, { useState, useEffect } from 'react';
import './App.css';
import store from './redux/store'
import { Provider } from 'react-redux'

import Navbar from './components/navbar'
import Home from './components/home'
import About from './components/about'
import Skills from './components/skills'
import Projects from './components/projects'
import Contact from './components/contact'





const Loading = () => {
  const [loading, setloading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setloading(false)
    }, 1100)
  }, [])

  return (
    <>
      {loading && (
        <div className={`loadingContainer ${loading}`}>
        <div className="loadingDot"></div>
        <div className="loadingDot"></div>
        <div className="loadingDot"></div>
      </div>
    )}
    </>
  )
}



function App() {
  return (
    <div className="App">
      <Loading/>
        <Provider store={store}>
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </Provider>
    </div>
  );
}

export default App;
