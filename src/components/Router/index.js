import React from 'react';
import Events from '../../Services/Events';

const events = new Events();

class Router extends React.Component {
    state = {
        activeRoute: null,
    };

    static go(path) {
        window.history.pushState({ path }, 'Test', path);
        events.notify('pushState');
    }

    componentDidMount() {
        this.renderActiveRoute();

        events.on('pushState', this.renderActiveRoute);
    }

    renderActiveRoute = () => {
        const path = window.location.pathname;
        const { routes } = this.props;
        const activeRoute = routes.find(route => route.path === path);
        const defaultRoute = routes.find(route => route.default);

        if (activeRoute) {
            if(
                (activeRoute.validation &&
                localStorage.getItem("Token") ) || !activeRoute.Novalidation
                ) return this.setState({ activeRoute: activeRoute.component });
        } else {
            // Handling default route
            window.location.replace(defaultRoute.path);
        }        
    }

    render () {
        return (
            <div>
                {this.state.activeRoute}
            </div>
        )
    }  
}

export default Router;