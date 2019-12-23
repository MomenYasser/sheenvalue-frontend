class Events {
    _listeners = {};

    addListener(event, action) {
        this._listeners[event] = action;
    }

    emitListener(event, ...rest) {
        this._listeners[event](...rest);
    }

    killListener(event) {
        delete this._listeners[event];
    }
}

export default Events;