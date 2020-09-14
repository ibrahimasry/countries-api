import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import SettingsBrightnessIcon from "@material-ui/icons/SettingsBrightness";
import { lightTheme, darkTheme } from "./theme";
import GlobalStyle from "./GlobalStyle";
import Nav from "./Nav";
import Button from "./Button";

function Layout({ children }) {
  const [mode, setMode] = useState("dark");
  return (
    <>
      <ThemeProvider theme={mode == "light" ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Nav>
          <div>
            <h1>what's in the world ?</h1>
          </div>
          <Button onClick={() => setMode(mode == "light" ? "dark" : "light")}>
            <SettingsBrightnessIcon></SettingsBrightnessIcon>

            <span>{mode} mode </span>
          </Button>
        </Nav>
        {children}
      </ThemeProvider>
    </>
  );
}

export default Layout;
