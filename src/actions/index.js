import {ADD_REMINDER} from '../constants';

export const addReminder = (text) => {
  const action = {
    type: ADD_REMINDER,
    payload: text
  }
  console.log('action',action);
  return action;
}
