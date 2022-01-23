import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InProgress } from "../models/InProgress";
import { v4 as uuidv4 } from "uuid";

const initialState = [] as InProgress[];

const inProgressSlice = createSlice({
  name: "progress",
  initialState,
  reducers: {
    addInProgress: {
      reducer: (state, action: PayloadAction<InProgress>) => {
        state.push(action.payload);
      },
      prepare: (description: string) => ({
        payload: {
          id: uuidv4(),
          description,
          completed: false,
        } as InProgress,
      }),
    },
    removeInProgress(state, action: PayloadAction<string>) {
      const index = state.findIndex((inProgress) => inProgress.id === action.payload);
      state.splice(index, 1);
    },
    setInProgressStatus(
      state,
      action: PayloadAction<{ completed: boolean; id: string }>
    ) {
      const index = state.findIndex((inProgress) => inProgress.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
  },
});

export const { addInProgress, removeInProgress, setInProgressStatus } = inProgressSlice.actions;
export default inProgressSlice.reducer;