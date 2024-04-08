
import base from "../api/base";
import createDataContext from "./createDataContext";
import AsyncStorage from '@react-native-async-storage/async-storage';


const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errMessage: action.payload }
        case 'add_user':
            return { ...state, isSignedIn: true, token: action.payload }
        case 'remove_session':
            return { ...state, isSignedIn: false, token: '', errMessage: '' }
        default: return state;
    }

}
const signUp = (dispatch) => {
    return ({ email, password }) => {
        base.post('/signup', { email, password })
            .then(res => { dispatch({ type: 'add_user', payload: res.data.token }); AsyncStorage.setItem('token', res.data.token) })
            .catch(err => { console.log(err); dispatch({ type: 'add_error', payload: 'Something went wrong!' }) })

    }
}
const signIn = (dispatch) => async ({ email, password }) => {
    try {
        const response = await base.post('/signin', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'add_user', payload: response.data.token });

    } catch (error) {
        console.error("SignIn Error:", error);
        dispatch({ type: 'add_error', payload: 'Signin failed' });
    }
};
const signOut = dispatch =>async ()=> { 
    await AsyncStorage.removeItem('token')
    dispatch({ type: 'remove_session' });
}


const localSignIn = dispatch => async () => {
    const token = await AsyncStorage.getItem('token')
    if (token) {
        dispatch({ type: 'add_user', payload: token });

    }
}

export const { Provider, Context } = createDataContext(authReducer, { signIn, signOut, signUp, localSignIn }, { isSignedIn: false, errMessage: '', token: null });