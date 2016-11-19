import React from "react";
import {Button} from 'react-bootstrap'
import FileSaver from 'file-saver'

class SaveButton extends React.Component {

  constructor(props) {
    super(props)
    this.state = {text: this.props.text}
  }

  componentWillReceiveProps(nextProps) {
    this.setState({text: nextProps.text})
  }
  saveCode(e) {
    e.preventDefault();
    const code = this.state.text;
    const blob = new Blob([code], {type: "text/plain;charset=utf-8"});
    FileSaver.saveAs(blob, "myTest.txt");
  }

  render() {
    return (
      <Button className="btn-primary col-lg-12" onClick={this.saveCode.bind(this)}>save</Button>
    )
  }
} 


export default SaveButton

