import React from 'react'
import {Form, FormGroup, FormControl, Button, ControlLabel} from 'react-bootstrap'

class ChooseUserName extends React.Component {
  constructor(props) {
    super(props)
    this.state = {userName: '', editing: false}
  }
  triggerChooseUserName(e) {
    e.preventDefault()
    this.props.chooseUserName(this.state.userName)
    this.setState({editing: false})
  }

  updateState(e) {
    this.setState({userName: e.target.value})
  }

  toggleEditing(e) {
    e.preventDefault()
    this.setState({editing: true})
  }

  editForm() {
    return (
      <Form inline>
        <FormGroup controlId="formInlineUserName">
          <FormControl type="text" defaultValue={this.props.userName} onChange={this.updateState.bind(this)}/>
          {' '}
          <Button type="submit" onClick={this.triggerChooseUserName.bind(this)}>
            change username
          </Button>
        </FormGroup>
      </Form>
    )
  }

  editButton() {
    return (
      <Form inline>
        <FormGroup controlId="formInlineUserName">
          <FormControl type="text" defaultValue={this.props.userName} disabled/>
          {' '}
          <Button type="submit" onClick={this.toggleEditing.bind(this)}>
            change username
          </Button>
        </FormGroup>
      </Form>
    )
  }

  render() {  
    return (
      <div>
        {this.state.editing ? this.editForm() : this.editButton()}
      </div>
    )
  }
}

export default ChooseUserName;