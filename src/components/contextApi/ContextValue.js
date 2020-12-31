import React from "react";

const ContextValue = React.createContext(0);
const ContextItem = React.createContext(false);

export const context = {
    ContextItem,
    ContextValue,
}