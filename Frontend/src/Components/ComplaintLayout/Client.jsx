import React, { useContext } from 'react'
import ComplaintChatBot from '../ComplaintChatBot/ComplaintChatBot'
import AuthProvider from '../AuthContext/AuthProvider'

const client = ({ children }) => {
    const {isAuthenticated} = useContext(AuthProvider)

    console.log('isAuthentiated', isAuthenticated)
    return (
        <>
            <div> {children}</div>
        </>
    )
}

export default client
