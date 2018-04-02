import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity, FlatList } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { styles, nav_styles } from './styles';
import { logout } from 'appray/src/actions/login';
import UserPrayerRequestsList from 'appray/src/components/presentational/UserPrayerRequestsList';

class PeopleShuffleDetailScreen extends Component {
    componentDidMount() {
    };

    render() {
        const { navigation } = this.props;
        const { user } = navigation.state.params;
        
        return (
            <View style={ styles.container }>
                <Text>Send a Prayer for { user.full_name }</Text>
            </View>
               
        );
    };
};

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ }, dispatch);
};
  
export default connect(mapStateToProps, mapDispatchToProps)(PeopleShuffleDetailScreen);