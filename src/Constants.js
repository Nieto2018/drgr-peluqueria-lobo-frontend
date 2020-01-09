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
export const BACKEND_SERVER_DOMAIN = 'localhost:8000'
export const BACKEND_SERVER_URL = 'http://' + BACKEND_SERVER_DOMAIN
export const GRAPHQL_URL = BACKEND_SERVER_URL + '/graphql/'
export const BACKEND_SERVER_WS = 'ws://' + BACKEND_SERVER_DOMAIN
export const GRAPHQL_SUBSCRIPTION_WS = BACKEND_SERVER_WS + '/subscriptions/'
export const RESET_PASSWORD_URL = BACKEND_SERVER_URL + '/rest-auth/password/reset/'

// Site URLs
export const HOME_URL = '/'

// Account URLs
// export const LOG_IN_URL = '/'
export const ACTIVATE_ACCOUNT_URL = '/account/activate-account/'
export const LOG_IN_URL = '/account/log-in/'
export const SIGN_UP_URL = '/account/sign-up/'
export const RESET_PASSWORD_EMAIL_URL = '/account/reset-password-email/'
export const RESET_PASSWORD_CONFIRM_URL = '/account/reset-password-confirm/'
export const ACTIVATE_ACCOUNT_URL = '/account/activate-account/'


/*
Account constants
*/
export const G_USER_ID = 'name'
export const G_USER_EMAIL = 'email'
export const G_AUTH_TOKEN = 'token'
export const ITEMS_PER_PAGE = 1 // setting this only to one so you can easily test your pagination implementation

export const APP_LANGUAGE = 'app-language'