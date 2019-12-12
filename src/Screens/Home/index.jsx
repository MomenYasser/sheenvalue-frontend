import React, { Component } from 'react';
import Todos from '../../components/Todos';
import Search from '../../components/Todos/Search';
class Home extends Component {
    render() { 
        return (
            <>
              <Search/>
              <Todos/> 
           </>
        );
    }
}
 
export default Home;