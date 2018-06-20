const initialState = {
  users: [],
  usersPrompt: false,
};

const Users = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_LIST': {
      state = {
        ...state,
        users: action.payload,
      };
      break;
    }
    case 'ADD_MORE_USERS': {
      state = {
        ...state,
        users: state.users.concat(action.payload),
      };
      break;
    }
    case 'NO_MORE_USERS_PROMPT': {
      state = {
        ...state,
        usersPrompt: true,
      };
      break;
    }
    default: {
      break;
    }
  }
  return state;
};

export default Users;
