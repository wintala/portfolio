import Skillmenu from "./componenets/skiill-menu"
import "./App.css"

import { BrowserRouter as Router,
Switch, Route, Link
} from "react-router-dom"
import Programming from "./componenets/programming-skills"
import Analytics from "./componenets/data-analytiikka";



const App = () => {

  return (
    <Router>
      <div className="nav">
        <Link to="/tiedot">TIEDOT</Link>
        <Link to="/taidot">TAIDOT</Link>
        <Link to="/portfolio">PORTFOLIO</Link>
      </div>
      <Switch>
        <Route path="/taidot/ohjelmointi">
          <Programming />
        </Route>
        <Route path="/taidot/dataanalytiikka">
          <Analytics />
        </Route>
        <Route path="/taidot">
          <Skillmenu />
        </Route>
        <Route path="/portfolio">
          <div>töitä täällä</div>
        </Route>
        <Route path="/tiedot">
          <div>tiedot täällä</div>
        </Route>
      </Switch>
    </Router>
  )
}

export default App

