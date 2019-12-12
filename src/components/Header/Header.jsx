import React, { Component } from "react";
import "./Header.css";
import Router from "../Router"
import { connect } from "react-redux";
import { logedout } from "../../Redux/Actions/Register";

class Header extends Component {
  handelClic = path => e => {
    e.preventDefault();
    Router.go(path);
  };
  logout=(e)=>{
    e.preventDefault();
    this.props.logedout()
    Router.go("/login");
  }

  render() {
    return (
      <div className="headerDiv">
        <ul>
        {
          this.props.loged ?
           <li>
                <a className="linkButton" 
                    href="#" 
                    onClick={this.logout}>
                  Log out
                </a>
          </li> 
          :
          this.props.childrens.map(child => {
            return (
              <li key={child.name}>
                <a
                  className="linkButton"
                   href="#"
                  onClick={this.handelClic(child.rout)}
                >{child.name}</a>
              </li>
            );
          })
        }
        </ul>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    loged: state.Register.LOGED.loged
  };
};

const mapDispatchToProprs = {
  logedout: logedout,
};

export default connect(mapStateToProps, mapDispatchToProprs)(Header);
