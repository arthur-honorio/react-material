import {
  BrowserRouter as Router,
  Switch, 
  Route,
} from "react-router-dom"

import TemplateDefault from "./templates/Default.js"
import Home from "./pages/Home.js"

const App = _ => {
  return(
    <TemplateDefault>
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </TemplateDefault>
  )
}

export default App