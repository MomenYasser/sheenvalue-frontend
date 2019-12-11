import React, { Component } from "react";
import "./Header.css";
import Router from '../Router/Router'
class Header extends Component {
  navigateTo = path => e => {
    e.preventDefault();

    Router.go(path);
}

  render() {
    return (
      <div className="navBar">
        <ul>
          <li><a onClick={this.navigateTo('/login')}>Sign In</a></li>
          <li><a onClick={this.navigateTo('/signup')}>Sign Up</a></li>
        </ul>
      </div>
    );
  }
}
export default Header;
