import { ADD_PARTICIPANT } from "../actionTypes";
const initialState = [];

const participants = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PARTICIPANT: {
      const participant = action.payload;
      return [...state, participant];
    }
    default:
      return state;
  }
};

export default participants;
