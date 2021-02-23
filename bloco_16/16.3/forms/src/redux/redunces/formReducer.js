import { IMPUT } from '../action/index';

const INITIAL_STATE = {
  //estado inicial
}

export default function imputsReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'IMPUT':
      return {
        ...state,
        // posso chamar o meu estado
      }
    default:
      return state;
  }
}