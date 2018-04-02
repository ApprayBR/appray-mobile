import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import UserProfile from 'appray/src/components/presentational/UserProfile';

export default class MyProfileScreen extends Component {
  render() {
    const { navigation } = this.props;
    
    return (
      <UserProfile navigation={navigation} isMyProfile={true} />
    );

  };
};
