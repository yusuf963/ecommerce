import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Homepage from './Pages/Homepage.component/HomePage'

const hatPage = () => {
  return <div><h1>Hello</h1></div>
}

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route component={hatPage} />
        </Switch>
      </Router>
    </div >
  );
}

export default App;
