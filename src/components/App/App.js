import React, {Component} from 'react';
import './App.scss';
import NavBar from "../NavBar/NavBar";
import Header from "../Header/Header";
import AboutForWho from "../AboutForWho/AboutForWho";
import AboutForWhat from "../AboutForWhat/AboutForWhat";
import AboutWithWho from "../AboutWithWho/AboutWithWho";
import Contact from "../Contact/Contact";



class App extends Component {
  render() {
    return (
        <>
       <NavBar/>
       <Header/>
       <AboutForWho/>
       <AboutForWhat/>
       <AboutWithWho/>
       <Contact/>

       </>
    )
  }
}


export default App;