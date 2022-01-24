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
import { addDone, removeDone, setDoneStatus } from "./redux/doneSlice";

function App3() {
  //React Hooks
  const [doneDescription, setDoneDescription] = useState("");

  //React Redux Hooks
  const combinedState = useSelector((state: RootState) => state);
  const dispatch = useDispatch<AppDispatch>();

  //Rendering
  return (
    <Container maxWidth="xs">
      <TextField
        variant="outlined"
        label="Done Item"
        fullWidth
        onChange={(e) => setDoneDescription(e.target.value)}
        value={doneDescription}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={() => {
          dispatch(addDone(doneDescription));
          setDoneDescription("");
        }}
      >
        Add Item
      </Button>
      <List>
        {combinedState.done.map((done) => (
          <ListItem key={done.id}>
            <ListItemText
              style={{
                textDecoration: done.completed ? "line-through" : "none",
              }}
            >
              {done.description}
            </ListItemText>
            <ListItemSecondaryAction>
              <IconButton
                onClick={() => {
                  dispatch(removeDone(done.id));
                }}
              >
                <DeleteIcon />
              </IconButton>
              <Checkbox
                edge="end"
                value={done.completed}
                onChange={() => {
                  dispatch(
                    setDoneStatus({ completed: !done.completed, id: done.id })
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


export default App3;