import React from 'react'
import Header from "./Header";
import Journey from "./Journey";
import Team from "./Team";
import ContactUs from "./ContactUs";
import Desktop from "./Store/Desktop";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function Home() {
  return (
    <>
      <Router>
        <Header/>
          <Routes>
            <Route  path="/journey" component={Journey} />
            <Route  path="/contact" element={ContactUs} />
            <Route  path="/team" element={Team} />
            <Route  path="/store" element={Desktop} />
          </Routes>
      </Router>
    </>
  )
}

export default Home
