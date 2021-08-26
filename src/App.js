import {
  BrowserRouter as Router,
  Switch, 
  Route,
} from "react-router-dom"

import Customers from "./pages/Customers.js"
import Home from "./pages/Home.js"
import TemplateDefault from "./templates/Default.js"
import TemplatePage from "./templates/Page.js"

const App = _ => {
  return(
    <Router>
      <TemplateDefault>
        <Switch>
          <Route exact path="/">
            <TemplatePage title="Página Inicial" Component={Home}/>
          </Route>
          <Route path="/customers">
            <TemplatePage title="Clientes" Component={Customers}/>
          </Route>
        </Switch>
      </TemplateDefault>
    </Router>
  )
}

export default App