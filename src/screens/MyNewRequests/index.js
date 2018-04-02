import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity, FlatList } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { styles, nav_styles } from './styles';
import { logout } from 'appray/src/actions/login';
import { getLoggedUserFromAPI } from 'appray/src/actions/user';
import UserPrayerRequestsList from 'appray/src/components/presentational/UserPrayerRequestsList';

class MyNewPrayerRequestsScreen extends Component {
    componentDidMount() {
        // TODO: Get logged user ID from local Storage
        this.props.getLoggedUserFromAPI(1);
    };

    render() {
        const { navigation, logout, getLoggedUserFromAPI, myUserProfile } = this.props;
        
        return (
            <View style={ styles.container }>
                
            </View>
               
        );
    };
};

const mapStateToProps = (state) => {
    return {
        myUserProfile: state.user.myUserProfile,
    };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ logout, getLoggedUserFromAPI, }, dispatch);
};
  
export default connect(mapStateToProps, mapDispatchToProps)(MyNewPrayerRequestsScreen);