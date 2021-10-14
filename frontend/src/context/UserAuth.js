import React, { useState } from 'react'

const UserAuth = React.createContext({
    auth: false,
    usr: '',
    setData: () => {},
})

const AuthProvider = ({children}) => {
    const [state, setState] = useState({})

    return (
        <UserAuth.Provider value={[state, setState]}>
            {children}
        </UserAuth.Provider>
    )
}

export { UserAuth, AuthProvider }
// export const AuthProvider = UserAuth.Provider
// export default UserAuth