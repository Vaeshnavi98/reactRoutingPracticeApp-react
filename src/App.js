import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NotFound from './components/NotFound'
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'
import Header from './components/Header'

import './App.css'

const App = () => (
  <BrowserRouter>
    <div className="main-div">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default App
