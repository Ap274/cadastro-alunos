import { toast } from 'react-toastify';
import * as types from '../types';

const INITIAL_STATE = {
  usuarioLogado: false,
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST: {
      toast.info(`Executando a requisição...`);
      return state;
    }
    case types.LOGIN_SUCCESS: {
      toast.success(`Usuário logado: ${state.usuarioLogado}`);
      const newState = {
        ...state,
        usuarioLogado: !state.usuarioLogado,
      };
      return newState;
    }
    case types.LOGIN_FAILURE: {
      toast.success(`Usuário logado: ${state.usuarioLogado}`);
      return state;
    }
    default: {
      return state;
    }
  }
};

export default loginReducer;
