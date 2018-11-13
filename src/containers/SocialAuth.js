import React, { Component } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { socialSignin } from '../actions/authActions';
import LargeLoader from '../components/shared/LargeLoader';


class SocialAuth extends Component {
  componentWillMount() {
    const { socialSignin: socialSigninUser, history } = this.props;
    const { token, userId } = queryString.parse(history.location.search);

    socialSigninUser({ token, userId }, (response) => {
      if (response) {
        history.push('/user/profile');
      } else {
        history.push('/auth/signin');
      }
    });
  }

  render() {
    return (
      <div>
        <LargeLoader />
      </div>
    );
  }
}

export default connect(null, { socialSignin })(SocialAuth);
