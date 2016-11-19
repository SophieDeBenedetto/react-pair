import React from 'react'
const socket = io()
import Codemirror from 'react-codemirror'
import ModeSelect from './ModeSelect'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/challengesActions';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/mode/ruby/ruby.js'


class Room extends React.Component {
  constructor(props) {
    super(props)
    this.state = {code: '', mode: 'javascript'}
    socket.on('receive code', (newCode) => this.updateCodeInState(newCode));
    socket.on('receive change mode', (newMode) => this.updateModeInState(newMode))
  }

  componentDidMount() {
    if (this.props.challenge.id == undefined) {
      this.props.actions.getChallenges();
    } else {     
      socket.emit('room', {room: this.props.challenge.id});
    }
  }

  updateCodeInState(newCode) {
    this.setState({
        code: newCode
    });
  }

  updateModeInState(newMode) {
    this.setState({
      mode: newMode
    })
  }

  codeIsHappening(newCode) {
    this.updateCodeInState(newCode)
    socket.emit('coding event', {code: newCode, room: this.props.challenge.id})
  }

  changeMode(newMode) {
    this.updateModeInState
    socket.emit('change mode', {mode: newMode, room: this.props.challenge.id})
  }

  render() {
    var options = {
        lineNumbers: true,
        mode: this.state.mode
    };
    return (
      <div>
        <h1>{this.props.challenge.title}</h1>
        <p>{this.props.challenge.description  }</p>
        <ModeSelect mode={this.state.mode} changeMode={this.changeMode.bind(this)}/>
        <Codemirror value={this.state.code} onChange={this.codeIsHappening.bind(this)} options={options} />
      </div>

    )
  }
}

function mapStateToProps(state, ownProps) {
  if (state.challenges.length > 0) {
    const challenge = state.challenges.filter(challenge => {return challenge.id == ownProps.params.id})[0]
    return {challenge: challenge}
  } else {
    return {challenge: {title: '', description: '', source: ''}}
  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(Room)





