
// import Observer from './observar'
import React from 'react'






@observer
class Mobx extends React.Component{
    state={
        y:3
    }
    x=5
    componentDidMount(){this.x=111}
    changeState=()=>{this.x=3}
    render(){return(<><button onClick={this.changeState}/><div>{this.x}</div></>)}
}

function observer(Class){
    console.log('CALL OBSERVER')
    console.log('Class1',Class)

     new Proxy(Class,{
        get:function(target,key){

            console.log('target get',target)
            console.log('key get',key)
            console.log('target[key]',target[key])
            console.log('geeeeeeetttt')
            return 99999  
        },
        set:function(target,key,value){
            console.log('seeet')
            target[key]=value;
            console.log('target');
            
            if(value!==target[key]){
                Class.render();
            }
            console.log('prox')

            if(Class.render.toString().indexOf(key) !== -1){
                Class.render();
            }
        },
    })
}

export default Mobx






