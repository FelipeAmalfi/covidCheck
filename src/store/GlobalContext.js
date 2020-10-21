
import React, { useState } from 'react'

export const GlobalContext = React.createContext()

const initialState = {
    Countries: []
}


export const InfoContext = ({ children }) => {
    const [info, setInfo] = useState(initialState)

    return (
        <GlobalContext.Provider value={{ info, setInfo }}>
            {children}
        </GlobalContext.Provider>
    )
}

