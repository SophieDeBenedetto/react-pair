import React from 'react'
import {ListGroup, ListGroupItem} from 'react-bootstrap'

const textGlow={
  textShadow: "#6AD8C9 0 0 10px"
}

const typing = {
  fontSize: '14px',
  fontStyle: 'italic',
  opacity: '.5'
}

const UserList = (props) => {
  return (
   <ListGroup>
      {props.users.map((user, i) => {
        if (user == props.currentlyTyping) {
          return <ListGroupItem key={i} style={textGlow}>{user}   <span style={typing}>typing...</span></ListGroupItem>
        } else {
          return <ListGroupItem key={i}>{user}</ListGroupItem>
        }
      })}
    </ListGroup>
  )
}

export default UserList;