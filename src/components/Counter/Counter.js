import React,{ Component } from "react";
@ammarCounter
class Counter extends Component{
    state = {
        x:5
    }
    render(){
        
    return <div>{this.state.x}</div>
    }
}
export default Counter;

let ammarCounter = new Proxy(Counter,{
    get:(target,key) => {
        return 5
    }
})