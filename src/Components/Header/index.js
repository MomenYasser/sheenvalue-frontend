import React from 'react';
import Router from '../Router';

class Header extends React.Component {
    navigateTo = path => e => {
        e.preventDefault();

        Router.go(path);
    }

    render () {
        return (
            <div style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}>
                <ul>
                    <li>
                        <a href="#" onClick={this.navigateTo('/login')}>Login</a>
                    </li>
                    <li>
                        <a href="#" onClick={this.navigateTo('/signup')}>Signup</a>
                    </li>
                </ul>
            </div>
        )
    }  
}

export default Header;