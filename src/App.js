import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/SignInAndSignUpPage'
import Header from './components/header/Header';
import { auth, createUserProfileDocument } from './firebase/Firebase.utils';

import { setCurrentUser } from './redux/user/user.action';

class App extends Component {

  unsubcribeFromAuth = null

  componentDidMount(){
    const {setCurrentUser} = this.props
    this.unsubcribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
            setCurrentUser({
              id: snapShot.id, 
              ...snapShot.data()
          })
        })

      }
      setCurrentUser(userAuth)
      console.log(this.state)

    })
  }

  componentWillUnmount(){
    this.unsubcribeFromAuth();
  }

  
  render(){
    return (
      <div >
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
      
    </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(null, mapDispatchToProps )(App);
