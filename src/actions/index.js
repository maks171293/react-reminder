import {ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS} from '../constants';

export const addReminder = (text, dueDate) => {
  const action = {
    type: ADD_REMINDER,
    payload: {
      text,
      dueDate
    }
  }
  return action;
}

export const deleteReminder = (id) => {
  const action = {
    type: DELETE_REMINDER,
    payload: id
  }
  return action;
}

export const clearReminders = () => {
  const action = {
    type: CLEAR_REMINDERS
  }
  return action;
}
