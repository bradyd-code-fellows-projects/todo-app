import React, { useState } from "react";

export const SettingsContext = React.createContext();

export default function SettingsProvider({children}) {

    const [completed, setCompleted] = useState(false)
    const [itemsPerScreen, setItemsPerScreen] = useState(3)
    const [sortField, setSortField] = useState('difficulty')

    // const addCompletedItem = item => {
        // use this to change state
    // }

    const settings = {
        completed,
        itemsPerScreen,
        sortField
    }

    return (
        <SettingsContext.Provider value={settings}>
            {children}
        </SettingsContext.Provider>
    )

}