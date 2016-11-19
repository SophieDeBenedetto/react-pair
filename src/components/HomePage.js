import React from 'react'
import {Link, browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/challengesActions';
import ChallengesList from './ChallengesList';


class HomePage extends React.Component {
  componentDidMount() {
    if (this.props.challenges.length == 0) {
      this.props.actions.getChallenges()
    }
  }
  render() {
    return (
      <div>
        <ChallengesList challenges={this.props.challenges} />
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