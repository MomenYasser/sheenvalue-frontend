import React, { Component } from "react";
import {connect} from 'react-redux'
import {deleteTask} from '../../myStore/actions/todoAction'
import "./Task.css";
const task = ({ name, descritpion ,deleteTask,index}) => {

  return (
    <div className="column">
      <div className="row">
        <h4 className="title">{name}</h4>
        <p style={{ marginLeft: "10px" }}>{descritpion}</p>
      </div>
    </div>
  );
};
export default connect(null,{deleteTask})(task);
