import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import { 
    APP_LANGUAGE, 
    G_AUTH_TOKEN
} from './Constants'

/*
Default language settings
*/
import { setDefaultTranslations, setDefaultLanguage } from 'react-multi-lang'
import es from './translations/es.json'
import en from './translations/en.json'

setDefaultTranslations({ es, en })

const app_language = localStorage.getItem(APP_LANGUAGE)
if (app_language != null && app_language !== 'es') {
    setDefaultLanguage(app_language)
} else {
    setDefaultLanguage('es')
}

/*
Default sessions settings
*/
const token = localStorage.getItem(G_AUTH_TOKEN)
if(null == token){
    // To avoid "Error decodin signature" of JWT authentication
    localStorage.setItem(G_AUTH_TOKEN, '')
}

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
