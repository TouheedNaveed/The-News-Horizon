import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Aboutus from './components/Aboutus';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

export default class App extends Component {
  apikey = "5cc1612c09724249a36de63ce869d1fa";
  pageSize=21;
  render() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<News key="general" pageSize={this.pageSize} country="nz" category="general" apikey={this.apikey} />} />
          <Route exact path="/about" element={<Aboutus />} />
          <Route exact path="/general" element={<News key="general" pageSize={this.pageSize} country="nz" category="general" apikey={this.apikey} />} />
          <Route exact path="/business" element={<News key="business" pageSize={this.pageSize} country="nz" category="business" apikey={this.apikey} />} />
          <Route exact path="/entertainment" element={<News key="entertainment" pageSize={this.pageSize} country="nz" category="entertainment" apikey={this.apikey} />} />
          <Route exact path="/sports" element={<News key="sports" pageSize={this.pageSize} country="nz" category="sports" apikey={this.apikey} />} />
          <Route exact path="/science" element={<News key="science" pageSize={this.pageSize} country="nz" category="science" apikey={this.apikey} />} />
          <Route exact path="/technology" element={<News key="technology" pageSize={this.pageSize} country="nz" category="technology" apikey={this.apikey} />} />
          <Route exact path="/health" element={<News key="health" pageSize={this.pageSize} country="nz" category="health" apikey={this.apikey} />} />
          <Route exact path="/contactus" element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router>
    )
  }
}
