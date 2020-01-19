import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar'
import store from './redux/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <div style={{margin: "60px auto", width: "80%"}}>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A accusantium rerum deserunt recusandae maxime perspiciatis, ullam aliquam inventore animi, tenetur pariatur assumenda exercitationem molestiae odit officiis et totam, quos nobis.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A accusantium rerum deserunt recusandae maxime perspiciatis, ullam aliquam inventore animi, tenetur pariatur assumenda exercitationem molestiae odit officiis et totam, quos nobis.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A accusantium rerum deserunt recusandae maxime perspiciatis, ullam aliquam inventore animi, tenetur pariatur assumenda exercitationem molestiae odit officiis et totam, quos nobis.</p>

        </div>
      </div>
    </Provider>
  );
}

export default App;
