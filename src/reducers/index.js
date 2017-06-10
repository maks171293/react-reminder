import {ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS} from '../constants';
import {bake_cookie, read_cookie} from 'sfcookies';

const reminder = (action) =>{
  return {
    text: action.payload.text,
    dueDate: action.payload.dueDate,
    id: Math.random()
  }
}

const reminders = (state = [], action) => {
  let reminders = null;
  state = read_cookie('reminders');
  switch(action.type){
    case ADD_REMINDER:
      reminders = [...state, reminder(action)];
      bake_cookie('reminders', reminders)
      return reminders;
    case DELETE_REMINDER:
      reminders = state.filter(reminder => reminder.id !== action.payload)
      bake_cookie('reminders', reminders)
      return reminders;
    case CLEAR_REMINDERS:
      reminders = [];
      bake_cookie('reminders', []);
      return reminders;
    default:
      return state;
  }
}

export default reminders;
