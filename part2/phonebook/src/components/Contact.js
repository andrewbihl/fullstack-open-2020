import React from "react"

const Contact = (props) => {
    const {contact} = {...props}
    return (
        <li>
            {`${contact.name} - ${contact.phone}`}
        </li>
    )
}

export default Contact
