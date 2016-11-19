import React from 'react'
import Codemirror from 'react-codemirror'
import ModeSelect from './ModeSelect'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/mode/ruby/ruby.js'
const socket = io();



export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {code: '', mode: 'javascript'}
    socket.on('receive code', (newCode) => this.updateCodeInState(newCode.code));
    socket.on('receive change mode', (newMode) => this.updateModeInState(newMode.mode))
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
    socket.emit('coding event', {code: newCode})
  }

  changeMode(newMode) {
    this.updateModeInState
    socket.emit('change mode', {mode: newMode})
  }

  render() {
    var options = {
        lineNumbers: true,
        mode: this.state.mode
    };
    return (
      <div>
        <ModeSelect mode={this.state.mode} changeMode={this.changeMode.bind(this)}/>
        <Codemirror value={this.state.code} onChange={this.codeIsHappening.bind(this)} options={options} />
      </div>

    )
  }
}