import React from "react";
import {connect} from 'react-redux';
import get from 'lodash/get';
import EntityActions, {catchGet, catchDelete, EntityTypes} from '../Redux/Actions/Entity'
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";

export default function (configure = {}) {
const {storeKey,keepEntity} = configure;
    return Component => {
    class Entity extends React.Component{
        constructor(props) {
            super(props);
            this.component = React.createRef();
        }

        componentDidMount() {
            this.props.register(storeKey);
        }
        get store(){
            const state = get(this,`props.entity.byKey.${storeKey}`,{});
            const actions = {
                get:this.get,
                post:this.post,
                deleteMethod:this.deleteMethod
            };
            return {
                ...state,
                ...actions
            };
        };
        get = (...rest) => {
            this.props.get(storeKey,...rest)
        };
        post = (...rest) =>{
            this.props.post(storeKey,...rest)
        };
        deleteMethod = (...rest) =>{
            this.props.deleteMethod(storeKey,...rest)
        }
        resetProps = (...rest) => {
            this.props.resetProps(storeKey,...rest)
        };
        componentDidUpdate(prevProps, prevState, snapshot) {
            const {
                didGet,
                getData,
                didPost,
                postData,
                didPut,
                putData,
                didDelete,
                deleteData,
                catchGet,
                catchPost,
                catchDelete
            } = this.store;
            if(didGet){
                console.log("rewwdqew")
                this.resetProps(['didGet','getData']);
                   this.component.current.entityDidGet(getData);

            }
            if(catchGet){
                this.resetProps(['didGet','getData']);
                console.log(getData)
                this.component.current.entityDidCatch(getData);

            }
            if (catchPost){

                this.component.current.entityDidCatch(postData);
                this.resetProps(['catchPost','postData']);
            }
            if(didPost){
                this.resetProps(['didPost','postData']);
                this.component.current.entityDidPost(postData);
            }
            if(didDelete){
                this.resetProps(['didDelete','deleteData'])
                this.component.current.entityDidDelete(deleteData)
            }
            if(catchDelete){
                this.resetProps(['catchDelete','deleteData'])
                this.component.current.entityDidCatch(deleteData)
            }
        }
        componentWillUnmount() {
            if (!keepEntity) {
                this.props.removeEntity(storeKey)
            }
        }



        render() {
            return <Component ref = {this.component} $store={this.store}/>
        }


    }
    const mapStateToProps = store => ({
            entity:store.entity
        });
    const mapDispatchToProps = dispatch => ({
            post:(...rest) => dispatch(EntityActions.post(...rest)),
            get: (...rest) => dispatch(EntityActions.get(...rest)),
            register:(...rest) => dispatch(EntityActions.register(...rest)),
            removeEntity:(...rest) => dispatch(EntityActions.removeEntity(...rest)),
            resetProps:(...rest) => dispatch(EntityActions.resetProps(...rest)),
            deleteMethod:(...rest) => dispatch(EntityActions.deleteMethod(...rest))

        });

        return connect(mapStateToProps,mapDispatchToProps)(Entity);
    };


};