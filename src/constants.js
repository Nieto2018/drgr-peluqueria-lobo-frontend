// Server constants
export const BACKEND_SERVER_DOMAIN ='localhost:8000'
export const BACKEND_SERVER_URL ='http://' + BACKEND_SERVER_DOMAIN
export const GRAPHQL_URL = BACKEND_SERVER_URL + '/graphql/'
export const BACKEND_SERVER_WS ='ws://' + BACKEND_SERVER_DOMAIN
export const GRAPHQL_SUBSCRIPTION_WS = BACKEND_SERVER_WS + '/subscriptions/'
export const RESET_PASSWORD_URL = BACKEND_SERVER_URL + '/rest-auth/password/reset/'

// Account constants
export const G_USER_ID ='name'
export const G_USER_EMAIL ='email'
export const G_AUTH_TOKEN ='token'
export const ITEMS_PER_PAGE = 1 // setting this only to one so you can easily test your pagination implementation

export const APP_LANGUAGE ='app-language'