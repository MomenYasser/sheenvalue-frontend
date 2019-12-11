import React , {Component} from 'react'
import Events from '../Services/Events'
const events = new Events()
class Router extends Component{
    state = {
        activeRoute:null
    }
    static go (path){
        window.history.pushState({path},'Test',path)
        events.notify('pushState')
    }
    componentDidMount() {
        this.renderActiveRoute();
        events.on('pushState',this.renderActiveRoute)
    }
    
    renderActiveRoute = () =>{
        const path = window.location.pathname
        const { routes } = this.props
        const activeRoutes = routes.find(route => route.path === path)
        const defaultRoute = routes.find(route => route.default)
        if(activeRoutes){
            this.setState({activeRoute:activeRoutes.component})
        }else{
            window.location.replace(defaultRoute.path)
        }

    }
    render(){
        return(
            <div>
                {this.state.activeRoute}
            </div>
        )

    }
}
export default Router