import { put, delay } from "redux-saga/effects";

import AccountActions from '../Actions/Account';

export default {
	*login({ data }) {
		const ok = false;
		yield delay(5000);

		if (ok) {
			yield put(AccountActions.loginSuccess('djshfkjdh84h39f98'));
		} else {
			yield put(AccountActions.loginError('Email or password is wrong'));
		}
	},
	*signup({ data }) {
		const ok = false;
		yield delay(5000);

		if (ok) {
			yield put(AccountActions.signupSuccess('djshfkjdh84h39f98'));
		} else {
			yield put(AccountActions.signupError('Email or password is wrong'));
		}
	},
};
