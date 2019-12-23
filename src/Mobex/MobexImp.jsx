import React, {Component} from 'react'
import Observ from "./Observable"

@Observ
class MobexImp extends Component {
    constructor(props){
        super(props);
        this.x=0
    }
    render() { 
    return<div>
        <h1>{this.x}</h1>
        <button onClick={()=>{
          this.x=this.x+1
          console.log(this.x)
        }}>Increment</button>
        </div>;
    }
}

 
export default MobexImp;
