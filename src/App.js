import {Route, Switch} from 'react-router-dom'
import {Component} from 'react'
import LoginForm from './components/LoginForm'
import Home from './components/Home'

import NotFound from './components/NotFound'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="body-section">
          <Switch>
            <Route exact path="/" component={Home} />

            <Route exact path="/login" component={LoginForm} />

            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
