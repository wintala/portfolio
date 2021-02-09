import Skillmenu from "./componenets/skiill-menu"
import "./App.css"

import { BrowserRouter as Router,
Switch, Route, Link
} from "react-router-dom"
import Programming from "./componenets/programming-skills"
import Analytics from "./componenets/data-analytiikka";
import Info from "./componenets/info-page";
import OtherSkills from "./componenets/other-skills";
import Portfolio from "./componenets/portfolio";
import Contact from "./componenets/contact-info";



const App = () => {

  return (
    <Router>
      <div className="nav">
        <Link to="/">PROFIILI</Link>
        <Link to="/taidot">TAIDOT</Link>
        <Link to="/portfolio">PORTFOLIO</Link>
        <Link to="/yhteystiedot">YHTEYSTIEDOT</Link>
        <div>CV Waltteri Rintala</div>
      </div>
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

