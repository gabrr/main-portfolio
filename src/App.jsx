import React, { Suspense, lazy, useEffect } from 'react';
import './App.css';
import store from './redux/store'
import { Provider } from 'react-redux'

const Navbar = lazy(() => import('./components/navbar'))
const Home = lazy(() => import('./components/home'))
const About = lazy(() => import('./components/about'))
const Skills = lazy(() => import('./components/skills'))
const Projects = lazy(() => AppBody)
const Contact = lazy(() => import('./components/contact'))

const timing = 2000

const AppBody = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(import('./components/projects'))
  }, timing)
})

const Loading = () => {
  let interval = timing / 4
  
  const shorteningWord = (text) => {
    let newText = text
    return newText.split("").slice(0, -1).join("")
  }

  const shortByTime = setInterval(function test() {
    let loadingLogo = document.getElementById("loadingLogo")
    loadingLogo.innerText = shorteningWord(loadingLogo.innerText)
    console.log("it is loading")
  }, interval);
  

  useEffect(() => {
    setTimeout(() => {
      clearInterval(shortByTime)
    }, timing * 0.9);
  })
  

  return(
    <div id="loadingLogo">
      Gabrr...
    </div>
  )
}



function App() {

  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <Provider store={store}>
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </Provider>
      </Suspense>
    </div>
  );
}

export default App;
