import React from "react"

const Contact = (props) => {
    const {contact} = {...props}
    return (
        <div>
            <p>{contact.name}</p>
            <p>{contact.phone}</p>
        </div>
    )
}

export default Contact
