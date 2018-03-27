import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { styles, nav_styles } from './styles';
import { getStaticImageByName } from 'appray/src/utils';

export default class UserPrayerRequestsList extends Component {
    render() {
        const { navigation, userProfile, isMyProfile } = this.props;
        const IMAGES = getStaticImageByName();
        userName = isMyProfile ? 'You' : userProfile.name
        
        if (userProfile && userProfile.requests) {
            userProfile.requests.forEach((request, i) => {
                request.key = i + 1;
            });
        }
        
        return (
            <View>
                <Text style={ styles.title }>
                    All requests from { userName }:
                </Text>
                <FlatList
                    style={ styles.requestsContainer }
                    data={ userProfile.requests }
                    renderItem={ ({ item }) =>
                        <TouchableOpacity onPress={() => navigation.navigate('PeoplePrayerRequestDetail', {'request': item})}>
                            <View style={ styles.row }>
                                <View style={ styles.textsContainer }>
                                    <Image
                                        style={ styles.requestImage }
                                        source={ IMAGES[item.type] }/>
                                    <Text style={ styles.title }> { item.type } </Text> 
                                    <Text style={ styles.description }> { item.short_description }</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    }
                />
            </View>
        );
    };
};
