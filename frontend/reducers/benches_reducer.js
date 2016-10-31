import merge from 'lodash/merge';

const benchesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {

    default:
      return state;
  }
};

export default benchesReducer;
