import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import "./App.css"

//pages
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import SkillsPage from "./pages/SkillsPage/SkillsPage";
import PortfolioPage from "./pages/PortfolioPage/PortfolioPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import SettingsPage from "./pages/SettingsPage/SettingsPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

//pages parts
import Header from "./structural/Header/Header"
import Footer from "./structural/Footer/Footer"


const App = () => {

  return (
    <>
      <Router>
      <Header></Header>
      
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/skills' element={<SkillsPage/>}/>
          <Route path='/porfolio' element={<PortfolioPage/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
          <Route path='/settings' element={<SettingsPage/>}/>
          <Route path='*' element={<ErrorPage/>}/>
          
        </Routes>

        <Footer></Footer>
      </Router>
    </>
  )
}

export default App
