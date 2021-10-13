import React from 'react'

const UserAuth = React.createContext({
    auth: false,
    setAuth: () => {},
})

export const AuthProvider = UserAuth.Provider
export default UserAuth