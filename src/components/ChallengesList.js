import React from 'react'
import {Link} from 'react-router'
import {ListGroup, ListGroupItem} from 'react-bootstrap'

const ChallengesList = (props) => {
  return (
    <ListGroup style={{height: '60%'}}>
      {props.challenges.map((challenge, i) => {
        return <ListGroupItem key={i}><Link to={`/rooms/${challenge.id}`}>{challenge.title}</Link></ListGroupItem>
      })}
    </ListGroup>
  )
}

export default ChallengesList;