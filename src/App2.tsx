// React App
import React from 'react';
import { useState } from "react";
// Material-UI Imports
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
// Other Imports
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./redux/store";
import { addInProgress, removeInProgress, setInProgressStatus } from "./redux/inProgressSlice";

function App2() {
  //React Hooks
  const [inProgressDescription, setInProgressDescription] = useState("");

  //React Redux Hooks
  const combinedState = useSelector((state: RootState) => state);
  const dispatch = useDispatch<AppDispatch>();

  //Rendering
  return (
    <Container maxWidth="xs">
      <TextField
        variant="outlined"
        label="In Progress Item"
        fullWidth
        onChange={(e) => setInProgressDescription(e.target.value)}
        value={inProgressDescription}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={() => {
          dispatch(addInProgress(inProgressDescription));
          setInProgressDescription("");
        }}
      >
        Add Item
      </Button>
      <List>
        {combinedState.inProgress.map((inProgress) => (
          <ListItem key={inProgress.id}>
            <ListItemText
              style={{
                textDecoration: inProgress.completed ? "line-through" : "none",
              }}
            >
              {inProgress.description}
            </ListItemText>
            <ListItemSecondaryAction>
              <IconButton
                onClick={() => {
                  dispatch(removeInProgress(inProgress.id));
                }}
              >
                <DeleteIcon />
              </IconButton>
              <Checkbox
                edge="end"
                value={inProgress.completed}
                onChange={() => {
                  dispatch(
                    setInProgressStatus({ completed: !inProgress.completed, id: inProgress.id })
                  );
                }}
              />
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}


export default App2;