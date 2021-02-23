import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Homepage from './Pages/Homepage.component/HomePage'
import ShopPage from './Pages/shop/shop.compoenent'
import Header from './Components/header/header-component'
import SignInAndSignUp from './Pages/sign-in-up/sign-in-up'
import { auth } from './firebase/firebase.utility'



class App extends React.Component {
  constructor(props) {
    super()
    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }
  render() {
    return (
      <div>
        <Router>
          <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path='/shop' component={ShopPage} />
            <Route path='/signin' component={SignInAndSignUp} />
          </Switch>
        </Router>
      </div >
    )
  }

}


export default App;
