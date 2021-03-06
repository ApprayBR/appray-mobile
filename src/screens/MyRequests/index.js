import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { styles, nav_styles } from './styles';
import { logout } from 'appray/src/actions/login';
import { getLoggedUserFromAPI } from 'appray/src/actions/user';
import UserPrayerRequestsList from 'appray/src/components/presentational/UserPrayerRequestsList';

class MyPrayerRequestsScreen extends Component {
    componentDidMount() {
        // TODO: Get logged user ID from local Storage
        this.props.getLoggedUserFromAPI(1);
    };

    render() {
        const { navigation, logout, getLoggedUserFromAPI, myUserProfile } = this.props;

        return (
            <View style={ styles.container }>
                <View style={ styles.bottom }>
                    <UserPrayerRequestsList navigation={navigation} userProfile={myUserProfile} isMyProfile={true} />
                </View>

                <View style={ styles.addNew }>
                    <TouchableOpacity onPress={ () => navigation.navigate('MyNewPrayerRequest', {'user': myUserProfile}) }>
                        <View style={styles.addTextContainer}>
                            <Image source={ require('appray/src/resources/images/add.png') } style={styles.addImage} />
                            <Text style={styles.addText}>Adicionar Pedido</Text>
                        </View>
                    </TouchableOpacity>
                </View>
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
  
export default connect(mapStateToProps, mapDispatchToProps)(MyPrayerRequestsScreen);