// import { FLASH_MESSAGES ,Dialog,DialogColest} from '../actions/types';

const INITIAL_STATE = {
  trantiones:'on',
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "OPENING":
      return { ...state, newMessages: action.payload };
    default:
       return state;
  }
}