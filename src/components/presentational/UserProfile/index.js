import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { styles, nav_styles } from './styles';
import { logout } from 'appray/src/actions/login';
import { getUserFromAPI } from 'appray/src/actions/user';
import UserPrayerRequestsList from 'appray/src/components/presentational/UserPrayerRequestsList';

class UserProfile extends Component {
    static navigationOptions = ({navigation}) => ({
    });

    componentDidMount() {
        this.props.getUserFromAPI(this.props.userId);
    };

    render() {
        const { navigation, isMyProfile, logout, getUserFromAPI, userProfile, myUserProfile } = this.props;
        const user = isMyProfile ? myUserProfile : userProfile

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
                                    <Text style={ styles.mediumText }> Membro desde: </Text>
                                    <Text style={ styles.mediumText }> Religião: </Text>
                                    <Text style={ styles.mediumText }> Igreja: </Text>
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
                            <TouchableOpacity onPress={ () => navigation.navigate('MyProfileRecordings', {'user': user}) }>
                                <View style={ [styles.logoutContainer, styles.imageText] }>
                                    <Image
                                        style={ styles.buttonImage }
                                        source={ require('appray/src/resources/images/list_icon.png') }
                                    />
                                    <Text style={styles.logoutText}>Ver Orações</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={ () => logout(navigation, 'Login') }>
                                <View style={ [styles.logoutContainer, styles.imageText] }>
                                    <Image
                                        style={ styles.buttonImage }
                                        source={ require('appray/src/resources/images/exit_icon.png') }
                                    />
                                    <Text style={styles.logoutText}>Sair do Appray</Text>
                                </View>
                            </TouchableOpacity>
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
                                <Text style={ styles.mediumText }> Membro desde: </Text>
                                <Text style={ styles.mediumText }> Religião: </Text>
                                <Text style={ styles.mediumText }> Igreja: </Text>
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