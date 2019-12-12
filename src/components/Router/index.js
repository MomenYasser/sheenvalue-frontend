import React from 'react';
import Events from '../../Services/Events';
import { connect } from "react-redux";

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
            if (
                (activeRoute.validation && this.props.Loged)
                || !activeRoute.validation) {

                return this.setState({ activeRoute: activeRoute.component });
                }else window.location.replace(defaultRoute.path);
        } else {
            // Handling default route
            window.location.replace(defaultRoute.path);
        }
    }

    render() {
        return (
            <div>
                {this.state.activeRoute}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        Loged: state.Register.LOGED.loged
    };
};
export default connect(mapStateToProps, null)(Router);