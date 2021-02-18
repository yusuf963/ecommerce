import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Homepage from './Pages/Homepage.component/HomePage'
import ShopPage from './Pages/shop/shop.compoenent'
import Header from './Components/header/header-component'


function App() {
  return (
    <div>

      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path='/shop' component={ShopPage} />
        </Switch>
      </Router>
    </div >
  );
}

export default App;
