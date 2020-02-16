import { createMuiTheme } from "@material-ui/core";

import { red, orange, blue } from "@material-ui/core/colors";

const colors = {
  red,
  orange,
  blue
};

let themeState = {
  themeType: "light",
  primaryColor: "red",
  spacingValue: 4
};

export const getThemeState = () => themeState;

const createThemeOptions = newThemeState => ({
  palette: {
    primary: colors[newThemeState.primaryColor],
    type: newThemeState.themeType
  },
  spacing: factor => newThemeState.spacingValue * factor
});

export const setThemeType = type => {
  themeState = {
    ...themeState,
    themeType: type
  };

  const themeOptions = createThemeOptions(themeState);

  return createMuiTheme(themeOptions);
};

export const setThemeColor = color => {
  themeState = {
    ...themeState,
    primaryColor: color
  };

  const themeOptions = createThemeOptions(themeState);

  return createMuiTheme(themeOptions);
};

export const setThemeSpacing = value => {
  themeState = {
    ...themeState,
    spacingValue: value
  };

  const themeOptions = createThemeOptions(themeState);

  return createMuiTheme(themeOptions);
};

export default () => {
  const themeOptions = createThemeOptions(themeState);
  return createMuiTheme(themeOptions);
};
