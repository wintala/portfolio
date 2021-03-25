import Skillmenu from "./componenets/skiill-menu"
import "./App.css"
import ReactGA from 'react-ga'

import { BrowserRouter as Router,
Switch, Route, Link
} from "react-router-dom"
import Programming from "./componenets/programming-skills"
import Analytics from "./componenets/data-analytiikka";
import Info from "./componenets/info-page";
import OtherSkills from "./componenets/other-skills";
import Portfolio from "./componenets/portfolio";
import Contact from "./componenets/contact-info";
import { useEffect, createContext, useState } from "react"
import LanguageChanger from "./componenets/language-changer";
import SquaresDrop from "./componenets/squaredrop"


export const LanguageContext = createContext()

const App = () => {
  const [language, setLanguage] = useState("EN")

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
      navPortfolio: "portfolio",
      navContactInfo: "contact info"
		},
		FI: {
			navProfile: "profiili",
      navSkills: "taidot",
      navPortfolio: "portfolio",
      navContactInfo: "yhteystiedot"
		},
	}

  return (
    <LanguageContext.Provider value={language} >
    <Router>
      <div className="nav">
        <Link to="/">{langContent[language].navProfile}</Link>
        <Link to="/taidot">{langContent[language].navSkills}</Link>
        <Link to="/portfolio">{langContent[language].navPortfolio}</Link>
        <Link to="/yhteystiedot">{langContent[language].navContactInfo}</Link>
        <div className="logo">CV Waltteri Rintala</div>
        <LanguageChanger changeLang={changeLang}/>
      </div>
      {window.location.pathname === "/" ? null : null}
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
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/">
          <Info />
        </Route>
      </Switch>
    </Router>
    </LanguageContext.Provider>
    
  )
}

export default App

