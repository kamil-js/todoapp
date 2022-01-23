import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Done } from "../models/Done";
import { v4 as uuidv4 } from "uuid";

const initialState = [] as Done[];

const doneSlice = createSlice({
  name: "done",
  initialState,
  reducers: {
    addDone: {
      reducer: (state, action: PayloadAction<Done>) => {
        state.push(action.payload);
      },
      prepare: (description: string) => ({
        payload: {
          id: uuidv4(),
          description,
          completed: false,
        } as Done,
      }),
    },
    removeDone(state, action: PayloadAction<string>) {
      const index = state.findIndex((done) => done.id === action.payload);
      state.splice(index, 1);
    },
    setDoneStatus(
      state,
      action: PayloadAction<{ completed: boolean; id: string }>
    ) {
      const index = state.findIndex((done) => done.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
  },
});

export const { addDone, removeDone, setDoneStatus } = doneSlice.actions;
export default doneSlice.reducer;