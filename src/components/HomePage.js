import React from 'react'
import {Link, browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/challengesActions';


class HomePage extends React.Component {
  componentDidMount() {
    if (this.props.challenges.length == 0) {
      this.props.actions.getChallenges()
    }
  }
  render() {
    return (
      <div>
        <ul>
          {this.props.challenges.map((challenge) => {
            return <li><Link to={`/rooms/${challenge.id}`}>{challenge.title}</Link></li>
          })}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {challenges: state.challenges}
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);