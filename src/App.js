import {
  BrowserRouter as Router,
  Switch, 
  Route,
} from "react-router-dom"

import Home from "./pages/Home.js"

const App = _ => {
  return(
    <>
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App