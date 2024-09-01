import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Aboutus from './components/Aboutus';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import ScrollBtn from './components/ScrollBtn';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  apikey = process.env.REACT_NEWS_APP_API;
  pageSize=6;

  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <Router>
        <Navbar />
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}/>
        <ScrollBtn/>
        <Routes>
          <Route exact path="/" element={<News setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="nz" category="general" apikey={this.apikey} />} />
          <Route exact path="/about" element={<Aboutus setProgress={this.setProgress} />} />
          <Route exact path="/general" element={<News setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="nz" category="general" apikey={this.apikey} />} />
          <Route exact path="/business" element={<News setProgress={this.setProgress} key="business" pageSize={this.pageSize} country="nz" category="business" apikey={this.apikey} />} />
          <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} country="nz" category="entertainment" apikey={this.apikey} />} />
          <Route exact path="/sports" element={<News setProgress={this.setProgress} key="sports" pageSize={this.pageSize} country="nz" category="sports" apikey={this.apikey} />} />
          <Route exact path="/science" element={<News setProgress={this.setProgress} key="science" pageSize={this.pageSize} country="nz" category="science" apikey={this.apikey} />} />
          <Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology" pageSize={this.pageSize} country="nz" category="technology" apikey={this.apikey} />} />
          <Route exact path="/health" element={<News setProgress={this.setProgress} key="health" pageSize={this.pageSize} country="nz" category="health" apikey={this.apikey} />} />
          <Route exact path="/contactus" element={<ContactUs setProgress={this.setProgress}/>} />
        </Routes>
        <Footer />
      </Router>
    )
  }
}
