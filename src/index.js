import React from "react";
import ReactDOM from "react-dom";

import { MuiThemeProvider } from "@material-ui/core/styles";

import getMuiTheme, {
  setThemeColor,
  setThemeSpacing,
  setThemeType,
  getThemeState
} from "./theme";

import App from "./App";

const Root = () => {
  const [theme, setTheme] = React.useState(getMuiTheme);

  const changeThemeType = type => {
    setTheme(setThemeType(type));
  };

  const changeThemeColor = color => {
    setTheme(setThemeColor(color));
  };

  const changeThemeSpacing = value => {
    setTheme(setThemeSpacing(value));
  };

  const themeState = getThemeState();

  return (
    <MuiThemeProvider theme={theme}>
      <App
        themeState={themeState}
        changeThemeType={changeThemeType}
        changeThemeColor={changeThemeColor}
        changeThemeSpacing={changeThemeSpacing}
      />
    </MuiThemeProvider>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
