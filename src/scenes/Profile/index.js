import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, Text, View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { styles, nav_styles } from './styles';
import { logout } from 'appray/src/actions/login';

class ProfileScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Profile',
    tabBarIcon: nav_styles.tabBarIcon,
    headerTitle: 'Profile',
    headerStyle: nav_styles.headerStyle,
    headerTitleStyle: nav_styles.headerTitleStyle,
  };

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>
          Click here to log out.
        </Text>
        <Button
          onPress={() => {
            this.props.logout(navigation, 'Login');
          }}
          title="Logout"
        />
      </View>
    );
  };
};

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ logout, }, dispatch);
};
  
export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);