import * as ActionTypes from './ActionTypes';


export const requestLogin = (user) => {
    return {
        type: ActionTypes.LOGIN_REQUEST,
        user
    }
};

export const loginSuccess = (token) => {
    return {
        type: ActionTypes.LOGIN_SUCCESS,
        token
    }
};

export const loginFailure = (errMess) => {
    return {
        type: ActionTypes.LOGIN_FAILURE,
        errMess
    }
};

export const login =  (user) => {
    return async (dispatch) => {
	    dispatch(requestLogin(user));
	    console.log(user);
	    try {
		    var response = await fetch('http://localhost:3000/login', {
		        method: 'POST',
		        headers: { 'Content-Type':'application/json' },
		        body: JSON.stringify(user)
		    });

		    if (!response.ok) {
		        var err = new Error('Error ' + response.status);
		        err.response = response;
		        throw err;
		    }

		    response = await response.json();
	    	if (response.success) {
	    		user.isAdmin = response.isAdmin;
	            localStorage.setItem('token', response.token);
	            localStorage.setItem('user', JSON.stringify(user));
	            dispatch(loginSuccess(response.token));
	            if(user.isAdmin) {
	            	// dispatch(getUsers());
	            	// dispatch(getFeedbacks());
	            }
	        }
	        else {
	            var err = new Error('Error ' + response.status);
	            err.response = response;
	            throw err;
	        }

	    }
	    catch(err) {
	    	dispatch(loginFailure(err.message));
	    }
	}
};

export const requestSignup = (user) => {
    return {
        type: ActionTypes.SIGNUP_REQUEST,
        user
    }
};

export const signupFailure = (errMess) => {
    return {
        type: ActionTypes.SIGNUP_FAILURE,
        errMess
    }
};

export const signup =  (user) => {
    return async (dispatch) => {
	    dispatch(requestSignup(user));
        console.log(user);
	    try {
		    var response = await fetch( + 'http://localhost:3000/sign-up', {
		        method: 'POST',
		        headers: { 'Content-Type':'application/json' },
		        body: JSON.stringify(user)
		    });
            
		    if (!response.ok) {
		        var err = new Error('Error ' + response.status + ': ' + response.statusText);
		        err.response = response;
		        throw err;
		    }
            response = await response.json();
		    if (response.success) {
		    	dispatch(login({username:user.username, password:user.password}));
		    }

	    }
	    catch(err) {
	    	dispatch(signupFailure(err.message));
	    }
	}
};