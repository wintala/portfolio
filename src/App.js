import Skillmenu from "./componenets/skiill-menu"
import "./App.css"
import ReactGA from 'react-ga'

import {Switch, Route, Link, useHistory} from "react-router-dom"
import Programming from "./componenets/programming-skills"
import Analytics from "./componenets/data-analytiikka";
import Footer from "./componenets/footer"
import Info from "./componenets/info-page";
import OtherSkills from "./componenets/other-skills";
import AboutMe from "./componenets/aboutme";
import Portfolio from "./componenets/portfolio";
import Contact from "./componenets/contact-info";
import { useEffect, createContext, useState, useRef } from "react"
import LanguageChanger from "./componenets/language-changer";
import SquaresDrop from "./componenets/squaredrop"


export const LanguageContext = createContext()

const App = () => {
  const history = useHistory()
  const startAnimRunningRef = useRef(true)
  const [language, setLanguage] = useState("FI")
  
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const lang = urlParams.get("lang")
    const upperLang = lang ? lang.toUpperCase() : lang
    if (upperLang === "EN" || upperLang === "FI") {
      setLanguage(upperLang)
    }
    else {
      history.push({pathname: window.location.pathname, search: "lang=" + language})
    }
    setTimeout(() => {startAnimRunningRef.current = false}, 10000)
    // eslint-disable-next-line
  }, [])

  console.log('render')

  const changeLang = (lang) => {
    setLanguage(lang)
  }

  useEffect(() =>{
    ReactGA.initialize('UA-189751634-1')
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])

  
	const langContent = {
		EN: {
			navProfile: "profile",
      navSkills: "skills",
      navAboutMe: "about me",
      navPortfolio: "portfolio",
      navContactInfo: "contact info"
		},
		FI: {
			navProfile: "profiili",
      navSkills: "taidot",
      navAboutMe: "minusta",
      navPortfolio: "portfolio",
      navContactInfo: "yhteystiedot"
		},
	}

  return (
    <LanguageContext.Provider value={language} >
      <div className="nav">
        <Link to={"/" + window.location.search}>{langContent[language].navProfile}</Link>
        <Link to={"/taidot" + window.location.search}>{langContent[language].navSkills}</Link>
        <Link to={"/minusta" + window.location.search}>{langContent[language].navAboutMe}</Link>
        <Link to={"/portfolio" + window.location.search}>{langContent[language].navPortfolio}</Link>
        <Link to={"/yhteystiedot" + window.location.search}>{langContent[language].navContactInfo}</Link>
        <div className="logo">CV Waltteri Rintala</div>
        <LanguageChanger changeLang={changeLang}/>
      </div>
      {/* {window.location.pathname === "/" && startAnimRunningRef.current ? <SquaresDrop /> : null} */}
      <Switch>
        <Route path="/taidot/ohjelmointi">
          <Programming />
        </Route>
        <Route path="/taidot/dataanalytiikka">
          <Analytics />
        </Route>
        <Route path="/taidot/muut">
          <OtherSkills />
        </Route>
        <Route path="/taidot">
          <Skillmenu />
        </Route>
        <Route path="/yhteystiedot">
          <Contact />
        </Route>
        <Route path="/minusta">
          <AboutMe />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/">
          <Info />
        </Route>
      </Switch>
      <Footer />
    </LanguageContext.Provider>
  )
}

export default App

