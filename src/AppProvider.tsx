import React, { createContext, useContext } from "react";

const appContext = createContext<any>({});

export const { Provider } = appContext;

export const useAppContext = () => useContext<any>(appContext);
