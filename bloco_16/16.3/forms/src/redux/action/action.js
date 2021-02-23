import { IMPUT } from './index';

export default functionName(acao1, acao2) {
  return {
    type: IMPUT,
    payload: {
      //nome dos parametros
      acao1,
      acao2,
    },
  };
}