class Events {
    _listener = {}
    on(event,action){
        this._listener[event] = action
    }
    notify(events,...rest){
        this._listener[events](...rest)
    }
    kill(event){
        delete this._listener[event]
    }
}
export default Events