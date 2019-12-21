import React, { useState } from 'react'
import Alert from 'react-bootstrap/Alert'

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