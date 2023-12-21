import "./src/styles/global.css"
import React from "react";
import { AppProviders } from "./src/components/app-providers";

export const wrapRootElement = ({ element }) => (
    <AppProviders>{element}</AppProviders>
);