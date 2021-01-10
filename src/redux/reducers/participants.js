import { ADD_PARTICIPANT, REMOVE_PARTICIPANT } from "../actionTypes";
const initialState = [];

const participants = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PARTICIPANT: {
      const participant = action.payload;
      return [...state, participant];
    }
    case REMOVE_PARTICIPANT: {
      let  participants = [...state];
      const index = participants.indexOf(action.payload);
      if(index > -1){
        participants.splice(index, 1)
      }
      return participants
    }
    default:
      return state;
  }
};

export default participants;
