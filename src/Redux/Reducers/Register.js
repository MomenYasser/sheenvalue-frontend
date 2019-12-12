import { LOGEDIN, LOGEDOUT } from '../Actions/Register';

const initialState = {
    LOGED: {
        token: localStorage.getItem("Token"),
        loged: localStorage.getItem("Token") ? true : false,
    }
};
function RegisterReducer(state = initialState, action) {
    switch (action.type) {
        case LOGEDIN:
            return {
                ...state,
                LOGED: {
                    ...state.LOGED,
                    token: action.token,
                    loged: true

                }

            };
        case LOGEDOUT:
            return {
                ...state,
                LOGED: {
                    ...state.LOGED,
                    token: null,
                    loged: false

                }

            };
        default:
            return state;
    };
}

export default RegisterReducer;