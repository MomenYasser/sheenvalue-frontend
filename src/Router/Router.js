import React from 'react'
import Events from '../Services/Events';
const events = new Events();

class Router extends React.Component{
    state={
        activeRoute:null
    }

    componentDidMount(){
        this.renderActiveRoute()
        events.addListener('pushState', this.renderActiveRoute);
    }
    renderActiveRoute=()=>{
        const path = window.location.pathname;
        const {routes}=this.props
        const activeRoute = routes.find(route => route.path === path);
        const exacRoute = routes.find(route => route.exac);

        if(activeRoute)
            this.setState({activeRoute:activeRoute.component})
        else
            window.location.replace(exacRoute.path);
            
    }
    static navigate(path){
        window.history.pushState({ path }, '' , path);
        events.emitListener('pushState');
    }
    render(){
        return(
                this.state.activeRoute
        )
    }
}

export default Router;