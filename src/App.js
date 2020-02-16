import React from "react";

// MUI
import {
  Typography,
  Paper,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Select,
  InputLabel,
  MenuItem
} from "@material-ui/core";

import { Delete } from "@material-ui/icons";

import { withStyles } from "@material-ui/core/styles";

const styles = ({ spacing }) => {
  return {
    root: {
      margin: `${spacing(10)}px auto`,
      padding: 20,
      maxWidth: 400
    },

    title: {
      marginBottom: spacing(6)
    },

    form: {
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      marginBottom: spacing(4)
    },

    input: {
      margin: 0
    },

    themeControls: {
      display: "flex",
      justifyContent: "space-evenly",
      marginBottom: spacing(6)
    },

    listItem: {
      marginBottom: spacing(2)
    }
  };
};

const initState = {
  title: "",
  exercises: [{ id: 1, title: "Position number one!" }]
};

const App = ({
  classes,
  themeState: { primaryColor, spacingValue, themeType },
  changeThemeType,
  changeThemeColor,
  changeThemeSpacing
}) => {
  const [state, setState] = React.useState(initState);

  const handleChange = ({ target: { name, value } }) => {
    setState(state => ({
      ...state,
      [name]: value
    }));
  };

  const handleCreate = e => {
    e.preventDefault();
    setState(state => {
      if (!state.title.trim()) return state;

      const { title, exercises } = state;

      return {
        title: "",
        exercises: [...exercises, { title, id: Date.now() }]
      };
    });
  };

  const handleDelete = id => {
    setState(state => ({
      ...state,
      exercises: state.exercises.filter(item => item.id !== id)
    }));
  };

  const { title, exercises } = state;

  return (
    <Paper className={classes.root}>
      <Typography className={classes.title} variant="h4" align="center">
        Exercise
      </Typography>

      <div className={classes.themeControls}>
        <div>
          <InputLabel id="demo-simple-select-label">Theme</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={themeType}
            onChange={({ target: { value: type } }) => changeThemeType(type)}
          >
            <MenuItem value={"light"}>light</MenuItem>
            <MenuItem value={"dark"}>dark</MenuItem>
          </Select>
        </div>

        <div>
          <InputLabel id="demo-simple-select-label">Color</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={primaryColor}
            onChange={({ target: { value: color } }) => changeThemeColor(color)}
          >
            <MenuItem value={"red"}>red</MenuItem>
            <MenuItem value={"orange"}>orange</MenuItem>
            <MenuItem value={"blue"}>blue</MenuItem>
          </Select>
        </div>

        <div>
          <InputLabel id="demo-simple-select-label">Spacing</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={spacingValue}
            onChange={({ target: { value: spacing } }) =>
              changeThemeSpacing(spacing)
            }
          >
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={6}>6</MenuItem>
          </Select>
        </div>
      </div>

      <form className={classes.form} onSubmit={handleCreate}>
        <TextField
          className={classes.input}
          name="title"
          label="Exercise"
          value={title}
          onChange={handleChange}
          margin="normal"
        />
        <Button type="submit" color="primary" variant="contained">
          Create
        </Button>
      </form>

      <List>
        {exercises.map(({ id, title }) => (
          <ListItem className={classes.listItem} key={id}>
            <ListItemText primary={title} />
            <ListItemSecondaryAction>
              <IconButton color="primary" onClick={() => handleDelete(id)}>
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default withStyles(styles)(App);
