import React from 'react'
import ReactDOM from 'react-dom';
import { translate } from 'react-multi-lang'
import { commitMutation, graphql } from 'react-relay'
import { Link } from "react-router-dom"
import queryString from 'query-string'

import { HOME_URL } from '../../Constants'
import { ListAlert } from '../utils/CustomComponents'
import environment from '../../Environment'

const mutation = graphql`
    mutation ActivateAccountMutation($token: String) {
        activateAccount(token: $token){
            email
            result
            errors
        }
    }
`

/*
This class was created because the method componentDidMount is neccessary 
but the method componentDidMount isn't.
With hooks errors are throwed because it calls method componentDidUpdate
*/
class ActivateAccount extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            accountActivated: false
        };
    }

    async _confirm() {

        const url = this.props.location.search
        const params = queryString.parse(url)
    
        const token = params["token"]
    
        const variables = {
            token: token
        }
    
        commitMutation(
            environment,
            {
                mutation,
                variables,
                onCompleted: data => {
                    let errorMessageList = []
    
                    if (null != data.activateAccount) {
    
                        if (data.activateAccount.errors.length > 0) {
                            data.activateAccount.errors.forEach(error => {
                                console.error(error)
    
                                if ('TokenRequiredError' === error) {
                                    errorMessageList.push(this.props.t('error.TokenNotFoundError'))
                                } else if ('ExpiredTokenError' === error) {
                                    errorMessageList.push(this.props.t('error.TokenExpiredError'))
                                } else if ('TokenNotMatchError' === error) {
                                    errorMessageList.push(this.props.t('error.TokenNotMatchError'))
                                } else if ('TokenUsedError' === error) {
                                    errorMessageList.push(this.props.t('error.TokenUsedError'))
                                } else if ('TokenError' === error) {
                                    errorMessageList.push(this.props.t('error.InvalidToken'))
                                } else if ('AccountDoesNotExistError' === error) {
                                    errorMessageList.push(this.props.t('account.backendError.InvalidEmailError'))
                                } else if ('AccountActiveError' === error) {
                                    errorMessageList.push(this.props.t('account.backendError.AccountActiveError'))
                                } else {
                                    errorMessageList.push(this.props.t('error.AdministratorContact'))
                                }
                            })
    
                        } else {
    
                            if ("OK" === data.activateAccount.result) {
                                this.setState({ accountActivated: true })
                            } else {
                                errorMessageList.push(this.props.t('error.AdministratorContact'))
                            }
    
                        }
                    } else {
                        errorMessageList.push(this.props.t('error.AdministratorContact'))
                    }
    
                    if (errorMessageList.length > 0) {
                        ReactDOM.render(
                            <ListAlert variant="danger" messagesList={errorMessageList} />,
                            document.getElementById('errorsActivateAccountDiv'))
                    }
                },
                onError: err => {
                    console.log(err)
                    let errorMessageList = [this.props.t('error.AdministratorContact')]
                    ReactDOM.render(
                        <ListAlert variant="danger" messagesList={errorMessageList} />,
                        document.getElementById('errorsActivateAccountDiv')
                    )
                },
            },
        )
    }

    componentDidMount() {
        this._confirm()
    }

    render() {
        return (
            <div>

                <section id="main" className="wrapper">
                    <div className="inner login">

                        <div className="content">

                            <h3>{this.props.t('account.ActivateAccount')}</h3>
                            <div id="errorsActivateAccountDiv" />
                            {!this.state.accountActivated ?
                                <p>{this.props.t('account.AccountActivating')}</p>
                                :
                                <p>{this.props.t('account.AccountActivated')}</p>
                            }
                            <Link to={HOME_URL}>{this.props.t('link.GoTo', { param: this.props.t('link.Home') })}</Link>
                        </div>

                    </div>

                </section>

            </div>
        )
    }

}

export default translate(ActivateAccount)