import React from 'react'
import Codemirror from 'react-codemirror'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';
import 'codemirror/mode/javascript/javascript.js'
const socket = io();



export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {code: ''}
    socket.on('receive code', (newCode) => this.updateCodeInState(newCode.code));

  }

  updateCodeInState(newCode) {
    this.setState({
        code: newCode
    });
  }

  codeIsHappening(newCode) {
    this.updateCodeInState(newCode)
    socket.emit('coding event', {code: newCode})
  }

  render() {
    var options = {
        lineNumbers: true,
        mode: 'javascript'
    };
    return <Codemirror value={this.state.code} onChange={this.codeIsHappening.bind(this)} options={options} />
  }
}