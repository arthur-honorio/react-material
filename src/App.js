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
    <TemplateDefault>
      <Router>
        <Switch>
          <Route exact path="/">
            <TemplatePage title="Página Inicial" Component={Home}/>
          </Route>
          <Route path="/customers">
            <TemplatePage title="Clientes" Component={Customers}/>
          </Route>
        </Switch>
      </Router>
    </TemplateDefault>
  )
}

export default App