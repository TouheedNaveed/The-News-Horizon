import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Aboutus from './components/Aboutus';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const apikey = "81e494b7891949acafde00011a3f9160";
  const pageSize = 6;

  const [progress, setProgress] = useState(0);

  return (
    <Router>
      <Navbar />
      <LoadingBar color='#f11946' progress={progress} />
      <ScrollToTopButton />
      <Routes>
        <Route exact path="/" element={<News setProgress={setProgress} key="general" pageSize={pageSize} country="us" category="general" apikey={apikey} />} />
        <Route exact path="/about" element={<Aboutus setProgress={setProgress} />} />
        <Route exact path="/general" element={<News setProgress={setProgress} key="general" pageSize={pageSize} country="us" category="general" apikey={apikey} />} />
        <Route exact path="/business" element={<News setProgress={setProgress} key="business" pageSize={pageSize} country="us" category="business" apikey={apikey} />} />
        <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pageSize={pageSize} country="us" category="entertainment" apikey={apikey} />} />
        <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" pageSize={pageSize} country="us" category="sports" apikey={apikey} />} />
        <Route exact path="/science" element={<News setProgress={setProgress} key="science" pageSize={pageSize} country="us" category="science" apikey={apikey} />} />
        <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" pageSize={pageSize} country="us" category="technology" apikey={apikey} />} />
        <Route exact path="/health" element={<News setProgress={setProgress} key="health" pageSize={pageSize} country="us" category="health" apikey={apikey} />} />
        <Route exact path="/contactus" element={<ContactUs setProgress={setProgress}/>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
