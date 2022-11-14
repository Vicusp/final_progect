//const SERVER = 'https://sf-final-project.herokuapp.com'
const SERVER = 'https://skillfactory-final-project.herokuapp.com'

const REQUESTS = {
    POST_SIGN_UP: '/api/auth/sign_up',
    POST_SIGN_IN: '/api/auth/sign_in',
    GET_TOKEN: '/api/auth',
    POST_CASE_PUBLIC: '/api/public/report',
    POST_CASE: '/api/cases',
    PUT_CASE: '/api/cases/:id',
    DELETE_CASE: '/api/cases/:id',
    GET_CASES: '/api/cases',
    GET_CASE: '/api/cases/:id',
    POST_OFFICER: '/api/officers',
    PUT_OFFICER: '/api/officers/:id',
    DELETE_OFFICER: '/api/officers/',
    GET_OFFICERS: '/api/officers',
    GET_OFFICER: '/api/officers/:id'
}

const CLIENT_ID = '00608cc5-e5ff-4cba-a629-3bf7219c7182'

const STATUS_BIKE = {
    NEW: 'new', 
    IN_PROGRESS: 'in_progress', 
    DONE: 'done'
}

const TYPE_BIKE = ['general', 'sport']

const IS_MOCK_DATA = false

export { SERVER, REQUESTS, CLIENT_ID, TYPE_BIKE, STATUS_BIKE, IS_MOCK_DATA }