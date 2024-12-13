import React from "react"
import './App.css';
import Header from "./Components/Header/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import SecondHandCard from "./Components/SecondHandCard"
import Founder from "./Components/Founder";
import Cofounder from "./Components/Cofounder";
import Event from "./Components/Event";
import Mission from "./Components/Mission"
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
     
      <Founder/>
      <Cofounder/>
      
      <Event/>
      <Mission/>
      <Footer />
    </div>
  );
}

export default App;
