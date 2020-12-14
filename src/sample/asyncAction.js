const redux = require('redux')
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios').default
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware


const initialState = {
    loading: false,
    data: [],
    error: ''
}

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

const fetchUserRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

const fetchUserSuccess = data => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: data
    }
}

const fetchUserFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USERS_REQUEST :
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCESS :
            return {
                loading: false,
                data: action.payload,
                error: ''
            }
        case FETCH_USERS_FAILURE :
            return {
                loading: false,
                data: [],
                error: action.payload
            }
    }
}

const fetchUser = () => {
    return function (dispatch) {
        dispatch(fetchUserRequest())
        axios.get('https://jsonplaceholder.typicode.com/users').then( res => {
            const data = res.data.map(user => user.id)
            dispatch(fetchUserSuccess(data))
        }).catch( e => {
            dispatch(fetchUserFailure(e.message))
        })
    }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware))
store.subscribe(() => {console.log(store.getState())})
store.dispatch(fetchUser())
