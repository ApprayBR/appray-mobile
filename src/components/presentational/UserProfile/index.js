import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity, FlatList } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { styles, nav_styles } from './styles';
import { logout } from 'appray/src/actions/login';
import { getUserFromAPI } from 'appray/src/actions/user';
import UserPrayerRequestsList from 'appray/src/components/presentational/UserPrayerRequestsList';

class UserProfile extends Component {
    static navigationOptions = ({navigation}) => ({
        headerTitle: navigation.state.params.headerTitle,
    });

    componentDidMount() {
        this.props.getUserFromAPI(this.props.userId);
        this.props.navigation.setParams({headerTitle: this.props.userProfile ? this.props.userProfile.name + '\'s Profile' : ''});
    };

    render() {
        const { navigation, isMyProfile, logout, getUserFromAPI, userProfile, myUserProfile } = this.props;
        
        user = isMyProfile ? myUserProfile : userProfile

        if (user && user.requests) {
            user.requests.forEach((request, i) => {
                request.key = i + 1;
            });
        }
        
        if (isMyProfile) {

            return (
                <View style={ styles.container }>
                
                    <View style={ styles.upperMyProfile }>
                        <View style={ styles.profileImage }>
                            <Image source={{ uri: user.image }}  style={styles.imageMyProfile} /> 
                        </View>
                        
                        <View style={ styles.textsContainerMyProfile }>
                            <Text style={ styles.fullName }> { user.full_name } </Text>
                            <View style={ styles.upperTexts}>
                                <View style={ styles.upperTitleTexts }>
                                    <Text style={ styles.mediumText }> Member since: </Text>
                                    <Text style={ styles.mediumText }> Religion: </Text>
                                    <Text style={ styles.mediumText }> Church: </Text>
                                </View>
                                <View style={ styles.upperValueTexts }>
                                    <Text> { user.member_since } </Text>
                                    <Text> { user.religion } </Text>
                                    <Text> { user.church } </Text>
                                </View> 
                            </View>
                            <View style={ styles.upperTextsMyProfile }>
                                <Text style={ styles.shortDescription }> { user.prayers } </Text>
                            </View>
                        </View>
                    </View>
                    
                    <View style={styles.bottom}>
                        <View style={ styles.logout }>
                            <TouchableHighlight onPress={ () => logout(navigation, 'Login') }>
                                <View style={styles.logoutContainer}>
                                    <Text style={styles.logoutText}>Logout</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </View>
    
                </View>
            );
        }

        return (
            <View style={ styles.container }>
            
                <View style={ styles.upper }>
                    <Image source={{ uri: user.image }}  style={styles.image} /> 
                    <View style={ styles.textsContainer }>
                        <Text style={ styles.fullName }> { user.full_name } </Text>
                        <View style={ styles.upperTexts}>
                            <View style={ styles.upperTitleTexts }>
                                <Text style={ styles.mediumText }> Member since: </Text>
                                <Text style={ styles.mediumText }> Religion: </Text>
                                <Text style={ styles.mediumText }> Church: </Text>
                            </View>
                            <View style={ styles.upperValueTexts }>
                                <Text> { user.member_since } </Text>
                                <Text> { user.religion } </Text>
                                <Text> { user.church } </Text>
                            </View> 
                        </View>
                        <View style={ styles.upperTexts }>
                            <Text style={ styles.shortDescription }> { user.prayers } </Text>
                        </View>
                    </View>
                </View>
                
                <View style={ styles.bottom }>
                    <UserPrayerRequestsList navigation={navigation} userProfile={user} isMyProfile={isMyProfile} />
                </View>

            </View>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        userProfile: state.user.userProfile,
        myUserProfile: state.user.myUserProfile,
    };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ logout, getUserFromAPI, }, dispatch);
};
  
export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);