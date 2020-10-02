import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/SignInAndSignUpPage'
import Header from './components/header/Header';
import { auth, createUserProfileDocument } from './firebase/Firebase.utils';

class App extends Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubcribeFromAuth = null

  componentDidMount(){
    this.unsubcribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id, 
              ...snapShot.data()
            }
          }
          )
        })

      }
      this.setState({currentUser: userAuth})
      console.log(this.state)

    })
  }

  componentWillUnmount(){
    this.unsubcribeFromAuth();
  }

  
  render(){
    return (
      <div >
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
      
    </div>
    )
  }
}
export default App;
