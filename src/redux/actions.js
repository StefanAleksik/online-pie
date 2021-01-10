import { ADD_PARTICIPANT, ADD_SLICE, ADD_COIN, INCREMENT_ORDER, ADD_WINNER, ADD_MSG, SHOW_CONFETTI, TOGGLE_SEARCH, REMOVE_PARTICIPANT } from "./actionTypes";

// participants
export const addParticipant = (participant) => ({
  type: ADD_PARTICIPANT,
  payload: {
    ...participant,
  },
});

export const removeParticipant = (participant) => ({
  type: REMOVE_PARTICIPANT,
  payload: participant
})

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

export const addWinner = winnner => ({
  type: ADD_WINNER,
  payload: {...winnner}
})

export const addMsg = msg => ({
  type: ADD_MSG,
  payload: msg
})

export const showConfetti = () => ({
  type: SHOW_CONFETTI
})

export const toggleSearch = bool => ({
  type: TOGGLE_SEARCH,
  payload: bool
})