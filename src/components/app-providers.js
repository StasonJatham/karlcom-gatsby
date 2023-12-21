import React from "react";
import { ThemeProvider } from "@material-tailwind/react";

export const AppProviders = ({ children }) => {
    return <ThemeProvider >{children}</ThemeProvider>;
};