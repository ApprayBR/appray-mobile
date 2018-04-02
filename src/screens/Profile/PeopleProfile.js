import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import UserProfile from 'appray/src/components/presentational/UserProfile';

export default  class PeopleProfileScreen extends Component {

  render() {
    const { navigation } = this.props;
    const { userId } = navigation.state.params;
    return (
      <UserProfile navigation={navigation} isMyProfile={false} userId={userId} />
    );

  };
};

