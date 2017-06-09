import {ADD_REMINDER} from '../constants';

const reminder = (action) =>{
  return {
    text: action.payload,
    id: Math.random()
  }
}

const reminders = (state = [], action) => {
  let reminders = null;
  switch(action.type){
    case ADD_REMINDER:
      reminders = [...state, reminder(action)];
      console.log('reminders in reducer', reminders);
      return reminders;
    default:
      return state;
  }
}

export default reminders;
