import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import AppBanner from './components/AppBanner';
import ImageGallery from './components/imageGallery';
import MainNav from './components/mainNav';
import ReviewAndLocation from './components/ReviewAndLocation';
import MeetHost from './components/MeetHost';
import Footer from './components/Footer';
import LeftColumn from './components/LeftColumn';
import RightColumn from './components/RightColumn';


function App() {
  return (
    <div className="App">
      <AppBanner/>
      <Navbar/>
      <MainNav/>
      <ImageGallery/>
      <div className="content-wrapper">
      <LeftColumn />
      <RightColumn />
    </div>
      <ReviewAndLocation/>
      <MeetHost/>
      <Footer/>
    </div>
  );
}

export default App;