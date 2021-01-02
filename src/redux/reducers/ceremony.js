import { INCREMENT_ORDER } from "../actionTypes";

const initialState = { position: 0 };

const ceremony = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_ORDER: {
        let ceremony = {...state}
        ceremony.position += 1
        return ceremony
    }
    default:
      return state;
  }
};

export default ceremony;
