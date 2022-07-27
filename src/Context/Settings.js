import React, { useState } from "react";

export const SettingsContext = React.createContext();

export default function SettingsProvider({children}) {

    const [completed, setCompleted] = useState(false)
    const [itemsPerScreen, setItemsPerScreen] = useState(3)
    const [sortField, setSortField] = useState('difficulty')

    const addCompletedItem = item => {
        setCompleted(!completed);
    }

    const updateItemsPerScreen = (item) => {
        setItemsPerScreen(item)
    }

    const updateSortField = value => {
        setSortField(value);
    }

    const setUserPreferences = () => {
        // let stringifiedPreferences = JSON.stringify(//user preferences);
        // localStorage.setItem('User preferences', stringifiedPreferences);
    }

    const settings = {
        completed,
        itemsPerScreen,
        sortField,
        addCompletedItem,
        updateItemsPerScreen,
        updateSortField
    }

    return (
        <SettingsContext.Provider value={settings}>
            {children}
        </SettingsContext.Provider>
    )

}