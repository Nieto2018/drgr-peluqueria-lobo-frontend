import React from 'react'
import ReactDOM from 'react-dom';
import { translate } from 'react-multi-lang'
import { Link } from "react-router-dom"
import queryString from 'query-string'

import UpdateEmailMutation from '../../mutations/account/UpdateEmailMutation'
import { HOME_URL } from '../../Constants'
import { ListAlert } from '../utils/CustomComponents'


/*
This class was created because the method componentDidMount is neccessary 
but the method componentDidMount isn't.
With hooks errors are throwed because it calls method componentDidUpdate
*/
class UpdateEmail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            emailUpdated: false
        };
    }

    async _confirm() {

        const url = this.props.location.search
        const params = queryString.parse(url)

        const token = params["token"]

        UpdateEmailMutation(token, (data, errors) => {
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
                    } else if ('EmailRegexError' === error) {
                        errorMessageList.push(this.props.t('account.backendError.InvalidEmailError'))
                    } else if ('EmailAlreadyRegisteredError' === error) {
                        errorMessageList.push(this.props.t('account.backendError.EmailAlreadyRegisteredError'))
                    } else if ('AccountDoesNotExistError' === error) {
                        errorMessageList.push(this.props.t('account.backendError.InvalidEmailError'))
                    } else if ('AccountInactiveError' === error) {
                        errorMessageList.push(this.props.t('account.backendError.AccountInactiveError'))
                    } else {
                        errorMessageList.push(this.props.t('error.AdministratorContact'))
                    }
                })

            } else {

                if ("OK" === data.result) {
                    this.setState({ emailUpdated: true })
                } else {
                    errorMessageList.push(this.props.t('error.AdministratorContact'))
                }

            }

            if (errorMessageList.length > 0) {
                ReactDOM.render(
                    <ListAlert variant="danger" messagesList={errorMessageList} />,
                    document.getElementById('errorsUpdateEmailDiv'))
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

                            <h3>{this.props.t('account.UpdateEmail')}</h3>
                            <div id="errorsUpdateEmailDiv" />
                            {!this.state.emailUpdated ?
                                <p>{this.props.t('account.EmailUpdating')}</p>
                                :
                                <p>{this.props.t('account.EmailUpdated')}</p>
                            }
                            <Link to={HOME_URL}>{this.props.t('link.GoTo', { destination: this.props.t('link.Home') })}</Link>
                        </div>

                    </div>

                </section>

            </div>
        )
    }

}

export default translate(UpdateEmail)