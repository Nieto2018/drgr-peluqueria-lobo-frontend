import React from 'react'
import ReactDOM from 'react-dom';
import { translate } from 'react-multi-lang'
import { Link } from "react-router-dom"
import queryString from 'query-string'

import ActivateAccountMutation from '../../mutations/account/ActivateAccountMutation'
import { HOME_URL } from '../../Constants'
import { ListAlert } from '../utils/CustomComponents'


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

        ActivateAccountMutation(token, (data, errors) => {
            let errorMessageList = []

            if (errors.length > 0) {
                errors.forEach(error => {
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

                if ("OK" === data.result) {
                    this.setState({ accountActivated: true })
                } else {
                    errorMessageList.push(this.props.t('error.AdministratorContact'))
                }

            }

            if (errorMessageList.length > 0) {
                ReactDOM.render(
                    <ListAlert variant="danger" messagesList={errorMessageList} />,
                    document.getElementById('errorsActivateAccountDiv'))
            }
        })
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