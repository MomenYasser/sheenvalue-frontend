import React from 'react';
import { connect } from 'react-redux';
import get from 'lodash/get';

import EntityActions from '../Redux/Actions/Entity';

export default function(configs = {}) {
  const { storeKey, keepEntity } = configs;
  
  return (Component,props) => {
    class Entity extends React.Component {
      constructor(props) {
        super(props);
        this.component = React.createRef();
      }

      componentDidMount() {
        this.props.register(storeKey);
      }

      get store() {
        const state = get(this, `props.entity.byKey.${storeKey}`, {});
        const actions = {
          get: this.get,
          post: this.post,
          put: this.put,
          delete: this.delete,
        };

        return {
          ...state,
          ...actions
        };
      }

      get = (...rest) => {
        this.props.get(storeKey, ...rest)        
      }

      post = (...rest) => {
        this.props.post(storeKey, ...rest)        
      }

      put = (...rest) => {
        this.props.put(storeKey, ...rest)        
      }

      delete = (...rest) => {
        this.props.delete(storeKey, ...rest)        
      }

      resetProps = (...rest) => {
        this.props.resetProps(storeKey, ...rest)
      }

      componentDidUpdate() {
        const {
          didGet,
          getData,
          didPost,
          postData,
          didPut,
          putData,
          didDelete,
          deleteData,
          catchPost,
        } = this.store;

        if(didPost) {
          this.resetProps(['didPost', 'postData']);
          this.component.current.entityDidPost(postData);
        }

        if(catchPost) {
          this.resetProps(['catchPost', 'postData']);
          this.component.current.entityDidCatch('post', postData);
        }

        if(didGet) {
          this.resetProps(['didGet', 'getData']);
          this.component.current.entityDidGet(getData);
        } 

        if(didPut) {
          this.resetProps(['didPut', 'putData']);
          this.component.current.entityDidPut(putData);
        } 

        if(didDelete) {
          this.resetProps(['didDelete', 'deleteData']);
          this.component.current.entityDidDelete(deleteData);
        } 
      }

      componentWillUnmount() {
        if (!keepEntity) {
          this.props.removeEntity(storeKey);
        }
      }

      render() {
        return (
            <Component ref={this.component} $store={this.store} />
        );
      }
    }


    const mapStateToProps = store => ({
      entity: store.entity,
    });

    const mapDispatchToProps = dispatch => ({
      register: (...rest) => dispatch(EntityActions.register(...rest)),
      post: (...rest) => dispatch(EntityActions.post(...rest)),
      get: (...rest) => dispatch(EntityActions.get(...rest)),
      put: (...rest) => dispatch(EntityActions.put(...rest)),
      delete: (...rest) => dispatch(EntityActions.delete(...rest)),
      resetProps: (...rest) => dispatch(EntityActions.resetProps(...rest)),
      removeEntity: (...rest) => dispatch(EntityActions.removeEntity(...rest)),
    });

    return connect(mapStateToProps, mapDispatchToProps)(Entity);
  }
}