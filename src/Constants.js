/*
Config constants
*/
export const TOAST_TYPE = {
    SUCCESS: 'success',
    WARNING: 'warn',
    ERROR: 'error'
}

/*
Server constants
*/
export const BACKEND_SERVER_DOMAIN = process.env.REACT_APP_BACKEND_URL || 'localhost:8000'
const WEB_PROTOCOL = window.location.protocol.includes('https') ? 'https' : 'http'
export const BACKEND_SERVER_URL = WEB_PROTOCOL + '://' + BACKEND_SERVER_DOMAIN
export const GRAPHQL_URL = BACKEND_SERVER_URL + '/graphql/'
const WS_PROTOCOL = window.location.protocol.includes('https') ? 'wss' : 'ws'
export const BACKEND_SERVER_WS = WS_PROTOCOL + '://' + BACKEND_SERVER_DOMAIN
export const GRAPHQL_SUBSCRIPTION_WS = BACKEND_SERVER_WS + '/subscriptions/'

// Site URLs
export const HOME_URL = '/'

// Account URLs
export const ACTIVATE_ACCOUNT_URL = '/account/activate-account/'
export const EDIT_ACCOUNT_URL = '/account/edit-account/'
export const LOG_IN_URL = '/account/log-in/'
export const SIGN_UP_URL = '/account/sign-up/'
export const RESET_PASSWORD_EMAIL_URL = '/account/reset-password-email/'
export const RESET_PASSWORD_CONFIRM_URL = '/account/reset-password-confirm/'
export const UPDATE_EMAIL_URL = '/account/update-email/'


/*
Account constants
*/
export const G_AUTH_TOKEN = 'token'
export const G_AUTH_TOKEN_VERIFIED = 'token-verified'
export const G_USER_EMAIL = 'email'
export const G_USER_NAME = 'username'
export const ITEMS_PER_PAGE = 1 // setting this only to one so you can easily test your pagination implementation

export const APP_LANGUAGE = 'app-language'