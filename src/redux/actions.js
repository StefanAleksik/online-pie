import { ADD_PARTICIPANT, ADD_SLICE, ADD_COIN } from "./actionTypes";

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

export const addCoin = sliceOrder => ({
  type: ADD_COIN,
  payload: sliceOrder
})