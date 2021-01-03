import { INCREMENT_ORDER, ADD_WINNER, ADD_MSG, SHOW_CONFETTI, TOGGLE_SEARCH } from "../actionTypes";

const initialState = { position: 0, winner: null, msg: "", confetti: false, search: false };

const ceremony = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_ORDER: {
      let ceremony = { ...state };
      ceremony.position += 1;
      return ceremony;
    }
    case ADD_WINNER: {
      const ceremony = { ...state, winner: action.payload };
      return ceremony;
    }
    case ADD_MSG: {
      const ceremony = { ...state, msg: action.payload };
      return ceremony;
    }
    case SHOW_CONFETTI: {
      const ceremony = { ...state, confetti: true };
      return ceremony;
    }
    case TOGGLE_SEARCH: {
      const ceremony = { ...state, search: action.payload };
      return ceremony;
    }
    default:
      return state;
  }
};

export default ceremony;
