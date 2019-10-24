import React, { useState, useCallback, useEffect } from "react";
// import { Button } from "../Components/Button";
import { Switch } from "antd";
import {
  ThemeProvider as StyledComponentsThemeProvider,
  withTheme
} from "styled-components";
import * as themeDefault from "./theme-interface";
import { mergeDeep } from "../utils";

function setModeToLocalStore(mode: string): void {
  localStorage.setItem("theme_mode", mode);
}

export function getModeFromLocalStore(): string {
  return localStorage.getItem("theme_mode") || "light";
}

export const ThemeProvider = (props: any) => {
  const { theme = {} } = props;

  const [mode, setMode] = useState(props.mode || getModeFromLocalStore());

  // @Note: we are persisting theme mode in local storage
  useEffect(() => {
    setModeToLocalStore(mode);
  }, [mode]);

  const toggleMode = useCallback(() => {
    setMode((state: string) => (state === "light" ? "dark" : "light"));
  }, []);

  const themeObj = mergeDeep(themeDefault, theme);

  return (
    <StyledComponentsThemeProvider
      theme={{ mode, ...themeObj[mode], toggleMode }}
    >
      {props.children}
    </StyledComponentsThemeProvider>
  );
};
