import { ADD_SLICE, ADD_COIN } from "../actionTypes";
const initialState = [];

const slices = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SLICE: {
      const slice = action.payload;
      return [...state, slice];
    }
    case ADD_COIN: {
      let slices = [...state];
      slices[action.payload] = { ...slices[action.payload], coin: true };
      return slices
    }
    default:
      return state;
  }
};

export default slices;
