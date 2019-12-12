import React, { Component } from "react";
import "./Header.css";
import Router from "../Router"

class Header extends Component {
  handelClic = path => e => {
    e.preventDefault();

    Router.go(path);
  };
  logout=(e)=>{
    e.preventDefault();
    localStorage.removeItem("Token");
    this.props.setLoged(false);
    Router.go("/login");
  }

  render() {
    return (
      <div className="headerDiv">
        <ul>
          {this.props.childrens.map(child => {
            return (
              <li key={child.name}>
                <a
                  className="linkButton"
                   href="#"
                  onClick={this.handelClic(child.rout)}
                >{child.name}</a>
              </li>
            );
          })}
          {
          this.props.Loged ?
           <li>
                <a className="linkButton" 
                    href="#" 
                    onClick={this.logout}>
                  Log out
                </a>
          </li> 
          :null}
        </ul>
      </div>
    );
  }
}

export default Header;
