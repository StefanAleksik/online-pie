import { ADD_PARTICIPANT, ADD_SLICE } from "./actionTypes";

export const addParticipant = (participant) => ({
  type: ADD_PARTICIPANT,
  payload: {
    ...participant,
  },
});

export const addSlice = slice => ({
    type: ADD_SLICE,
    payload: {
        ...slice
    }
})