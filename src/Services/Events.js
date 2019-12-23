class  Events {
    _listeners = {};

    on(event, action) {
        this._listeners[event] = action;
    }

    notify(event, ...rest) {
        this._listeners[event](...rest);
    }

    kill(event) {
        delete this._listeners[event];
    }
}

export default Events;