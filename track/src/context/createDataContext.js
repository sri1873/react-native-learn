import React, { useReducer } from "react";

export default (reducer, actions, defaultValue) => {
    const Context = React.createContext()

    const Provider = ({ children }) => {

        const [state, dispatch] = useReducer(reducer, defaultValue)

        const buildActions = {};

        for (let key in actions) {
            buildActions[key] = actions[key](dispatch);
        }

        return <Context.Provider value={{ state, ...buildActions }}>{children}</Context.Provider>
    }
    return { Context, Provider }

}