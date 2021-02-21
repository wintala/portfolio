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
import { useEffect } from "react"
import SquaresDrop from "./componenets/squaredrop"


const App = () => {

  useEffect(() =>{
    ReactGA.initialize('UA-189751634-1')
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])

  return (
    <Router>
      <div className="nav">
        <Link to="/">PROFIILI</Link>
        <Link to="/taidot">TAIDOT</Link>
        <Link to="/portfolio">PORTFOLIO</Link>
        <Link to="/yhteystiedot">YHTEYSTIEDOT</Link>
        <div>CV Waltteri Rintala</div>
      </div>
      <SquaresDrop />
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
  )
}

export default App

