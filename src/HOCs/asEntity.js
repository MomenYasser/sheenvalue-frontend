import React from 'react';
import { connect } from 'react-redux';
import EntityActions from '../Redux/Actions/Entity'


export default ( configs = {} ) => {
  
    const { key } = configs ;

 return Component => {
     class EntityComponent extends React.Component {
        
        get store() {
            const { entityStore } = this.props; 
        }
        componentDidMount(){
            this.props.register(key);
        }
        componentDidUpdate(){

        }
        render() {
            return (<Component />);
        }
     }

     const mapStateToProps = store => ({
        entityStore: store.entity,
    });

    const mapDispatchToProps = dispatch => ({
     register : (key) => dispatch(EntityActions.register(key)),
     post : (key,postData) => dispatch(EntityActions.post(key,postData)),
     
    });

    return connect(mapStateToProps, mapDispatchToProps)(EntityComponent);

 }

}