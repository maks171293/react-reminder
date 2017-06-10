import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addReminder, deleteReminder, clearReminders} from '../actions';
import moment from 'moment';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      text: '',
      dueDate: ''
    };
  }
  addReminder(){
    this.props.addReminder(this.state.text, this.state.dueDate);
  }

  deleteReminder(id){
    this.props.deleteReminder(id)
  }

  clearReminders(){
    this.props.clearReminders()
  }

  renderReminders(){
    let {reminders} = this.props;
    return (
      <ul className="list-group col-sm-5 col-xs-10">
        {
          reminders.map((reminder)=>{
            return(
              <li key={reminder.id}
                className="list-group-item">
                <div className="list-item">
                  <div>{reminder.text}</div>
                  <div><em>{moment(new Date(reminder.dueDate)).fromNow()}</em></div>
                </div>
                <div
                  className="list-item delete-button"
                  onClick={()=>this.deleteReminder(reminder.id)}
                  >&#x2715;</div>
                </li>
            )
          })
        }
      </ul>
    )
  }
  render(){
    return (
      <div className="app">
        <div className="title">
          Reminder Pro
        </div>
        <div className="form-inline form-reminder">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="I have to..."
              onChange={(event)=> this.setState({text: event.target.value}) }
            />
            <input
              type="datetime-local"
              className="form-control"
              // pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}"
              // placeholder="2017-12-30"
              onChange={event=>this.setState({dueDate: event.target.value})}
            />
          </div>
          <button
            type="button"
            className="btn btn-success"
            onClick={()=>this.addReminder()}
            >
              Add Reminder
          </button>
        </div>
        {this.renderReminders()}
        <button
          type="button"
          className="btn btn-warning"
          onClick={()=>this.clearReminders()}
          >
          Clear All Reminders
        </button>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    reminders: state
  }
}

export default connect(mapStateToProps, {addReminder, deleteReminder, clearReminders})(App);
