import React from "react";
import {Button} from 'react-bootstrap'
import FileSaver from 'file-saver'



import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/mode/ruby/ruby.js'
import 'codemirror/mode/swift/swift.js'
import 'codemirror/mode/clojure/clojure.js'
import 'codemirror/mode/python/python.js'
import 'codemirror/mode/php/php.js'
import 'codemirror/mode/erlang/erlang.js'
import 'codemirror/mode/coffeescript/coffeescript.js'
import 'codemirror/mode/crystal/crystal.js'

class SaveButton extends React.Component {

  constructor(props) {
    super(props)
    this.state = {text: this.props.text, title: this.props.title, lang: this.props.lang}
  }

  fileExtension(lang) {
    const fileExtensionDict = {
      "javascript": "js",
      "ruby": "rb",
      "swift": "SWIFT",
      "clojure": "clj",
      "python": "py",
      "php": "php",
      "erlang": "erl",
      "coffeescript": "coffee",
      "crystal": "cr"
    }
    return fileExtensionDict[lang]
  }

  fileNameify(name) {
    return name.split(" ").join("_")
  }

  componentWillReceiveProps(nextProps) {
    this.setState({text: nextProps.text, title: nextProps.title, lang: nextProps.lang})
  }
  saveCode(e) {
    e.preventDefault();
    const code = this.state.text;
    const blob = new Blob([code], {type: "text/plain;charset=utf-8"});
    FileSaver.saveAs(blob, `${this.fileNameify(this.state.title)}.${this.fileExtension(this.state.lang)}`);
  }

  render() {
    return (
      <Button className="btn-primary col-lg-12" onClick={this.saveCode.bind(this)}>save</Button>
    )
  }
} 


export default SaveButton

