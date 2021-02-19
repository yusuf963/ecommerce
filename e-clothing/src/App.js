import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Homepage from './Pages/Homepage.component/HomePage'
import ShopPage from './Pages/shop/shop.compoenent'
import Header from './Components/header/header-component'
import SignInAndSignUp from './Pages/sign-in-up/sign-in-up'


function App() {
  return (
    <div>

      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUp} />
        </Switch>
      </Router>
    </div >
  );
}

export default App;
