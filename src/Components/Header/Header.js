import React from 'react';

import Router from '../../Router/Router';

class Header extends React.Component {
    navigateTo = path => e => {
        e.preventDefault();
        console.log(path)
        Router.navigate(path);
    }
    onLogout=()=>{
        this.props.logout()        
    }
    renderUnAuth(){
        return(
            <div style={{background:'#2F4048',height:'5%',width:'100%',display:'flex',justifyContent:'center',alignItems:'center',justifyContent:'space-around'}}>
                <label href="#" style={{color:'white'}} onClick={this.navigateTo('/login')}>Login</label>
                <label href="#" style={{color:'white'}} onClick={this.navigateTo('/signup')}>Signup</label>
            </div>
        )
    }
    renderAuth(){
        return(
            <div style={{background:'#2F4048',height:'5%',width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <label style={{color:'white'}} href="#" onClick={this.onLogout}>Logout</label>
            </div>
        )
    }
    render () {

        if(!this.props.userData)
        {
            return (
                this.renderUnAuth()
            )
        }
        else
        {
            return(
                this.renderAuth()
            )
        }

    }  
}


   
export default Header;
