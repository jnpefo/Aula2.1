import { IMPUT } from '../action/index';

const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  countryState: '',
  addressType: '',
  resume: '',
  role: '',
  roleDescription: '',
  formError: {},
  submitted: false,
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