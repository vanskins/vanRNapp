import axios from 'axios';

export function getUsers(callback) {
  return (dispatch) => {
    axios.get(`https://reqres.in/api/users?page=0`)
    .then((response) => {
      dispatch({
        type: "SET_USER_LIST",
        payload: response.data.data,
      })
      callback(null, 'success');
    })
    .catch((error) => {
      callback(error, null);
    });
  }
}

export function loadMore(page) {
  return dispatch => {
    axios.get(`https://reqres.in/api/users?page=${page}`)
    .then((response) => {
      if (response.data.data.length > 0) {
        dispatch({
          type: "ADD_MORE_USERS",
          payload: response.data.data,
        });
      } else {
        dispatch({
          type: "NO_MORE_USERS_PROMPT",
          payload: true,
        });
      }
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  }
}