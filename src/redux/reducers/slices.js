import {ADD_SLICE} from '../actionTypes'
const initialState = []

const slices = (state = initialState, action) => {
    switch(action.type) {
        case ADD_SLICE: {
            const slice = action.payload
            return [...state, slice]
        }
        default: 
        return state;
    }
}

export default slices;