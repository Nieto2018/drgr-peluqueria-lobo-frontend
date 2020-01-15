import Alert from 'react-bootstrap/Alert'
import Spinner from 'react-bootstrap/Spinner'
import React, { useState } from 'react'
import { translate } from 'react-multi-lang'

export function ListAlert(props) {
    const header = props.header
    const messagesList = props.messagesList
    const variant = props.variant

    const [show, setShow] = useState(true);

    let elementToRender = null

    if (messagesList.length > 1) {
        let itemsList = messagesList.map((message) => <li>{message}</li>)
        elementToRender = <ul>{itemsList}</ul>
    } else {
        elementToRender = messagesList[0]
    }

    if (show) {
        return (
            <Alert variant={variant} onClose={() => setShow(false)} dismissible>
                {null != header && <Alert.Heading>{header}:</Alert.Heading>}
                {elementToRender}
            </Alert>
        )
    }
}

function LoadingComponent(props) {
    return (
        <div>
            <section id="main" className="wrapper">
                <div className="inner loading">
                    <div className="content">
                        <h2>{props.t('home.HairdressersName')}</h2>
                        <br />
                        <Spinner animation="border" variant="danger" />
                        <h3>{props.t('generic.Loading')}...</h3>
                    </div>
                </div>
            </section>
        </div>
    )
}

export const Loading = translate(LoadingComponent)