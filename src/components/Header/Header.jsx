import React, { Component } from "react";
import "./Header.css";
import {connect} from 'react-redux'
import {loggedOut} from '../store/actions/accountAction'
import Router from '../Router/Router'
class Header extends Component {
  navigateTo = path => e => {
    e.preventDefault();

    Router.go(path);
}
onLogout = () =>{
  this.props.loggedOut();
  Router.go('/login');
}

  render() {
    return (
      <div className="navBar">
        <ul>
          {!this.props.isLoggedIn ? 
            (<><li><a onClick={this.navigateTo('/login')}>Sign In</a></li>
            <li><a onClick={this.navigateTo('/signup')}>Sign Up</a></li>
            <li><a onClick={this.navigateTo('/counter')}>Counter</a></li></>):
            <li><a onClick={this.onLogout}>Log Out</a></li>
           }
          
        </ul>
      </div>
    );
  }
}
const mapStateToProps = state =>{
  return{
    isLoggedIn: state.account.isLoggedIn
  }
}
export default connect(mapStateToProps,{loggedOut})(Header);
