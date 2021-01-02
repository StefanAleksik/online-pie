import { ADD_PARTICIPANT, ADD_SLICE, ADD_COIN, INCREMENT_ORDER } from "./actionTypes";

// participants
export const addParticipant = (participant) => ({
  type: ADD_PARTICIPANT,
  payload: {
    ...participant,
  },
});

// slices
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

// ceremony
export const incrementOrder = () => ({
  type: INCREMENT_ORDER
})