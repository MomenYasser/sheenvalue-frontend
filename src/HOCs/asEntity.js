import React from 'react';
import { connect } from 'react-redux';
import EntityActions from '../Redux/Actions/Entity'
import get from 'lodash/get';

export default (configs = {}) => {

    const { key, keep } = configs;

    return Component => {

        class EntityComponent extends React.Component {

            constructor(props) {
                super(props);
                this.component = React.createRef();
            }

            get store() {
                const state = get(this, `props.entityStore.byKey.${key}`, {});
                const actions = {
                    post: this.post,
                    resetProps: this.resetProps,
                };

                return {
                    ...state,
                    ...actions
                };

            }

            post = data => {
                this.props.post(key, data);
            }

            resetProps = (props) => {
                this.props.resetProps(key, props);
            }

            componentDidMount() {
                this.props.register(key);
            }
           

            componentDidUpdate() {
                const {
                    didPost,
                    errors,
                    postData
                } = this.store;
                
                if (didPost) {
                    
                    this.component.entityDidPost(postData);
                    this.resetProps(['didPost', 'postData']);
                }

                if (errors) {
                    this.component.entityDidCatch('post', errors);
                    this.resetProps(['errors', 'postData']);
                }

            }

            componentWillUnmount() {
                if ( !keep )
                this.props.unregister(key);
            }

            render() {
                return (<Component ref={ref => (this.component = ref)} $store={this.store} />);
            }
        }

        const mapStateToProps = store => ({
            entityStore: store.Entity,
        });

        const mapDispatchToProps = dispatch => ({
            register: (key) => dispatch(EntityActions.register(key)),
            unregister: (key) => dispatch(EntityActions.unregister(key)),
            post: (key, postData) => dispatch(EntityActions.post(key, postData)),
            resetProps: (key, props) => dispatch(EntityActions.resetProps(key, props))
        });

        return connect(mapStateToProps, mapDispatchToProps)(EntityComponent);

    }

}