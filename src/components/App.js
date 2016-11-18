import React from 'react'
import Codemirror from 'react-codemirror'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';
import 'codemirror/mode/javascript/javascript.js'


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {code: ''}
  }

  updateCode(newCode) {
    debugger;
    this.setState({
        code: newCode
    });
  }

  render() {
    var options = {
        lineNumbers: true,
        mode: 'javascript'
    };
    return <Codemirror value={this.state.code} onChange={this.updateCode.bind(this)} options={options} />
  }
}