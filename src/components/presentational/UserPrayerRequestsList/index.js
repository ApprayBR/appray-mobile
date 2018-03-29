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
        const nextScreen = isMyProfile ? 'MyPrayerRequestDetail' : 'PeoplePrayerRequestDetail' 
        const title = isMyProfile ? 'Todos os meus pedidos' : 'Todos os pedidos de ' + userProfile.name
        return (
            <View>
                <Text style={ styles.title }>
                    { title }:
                </Text>
                <FlatList
                    style={ styles.requestsContainer }
                    data={ userProfile.requests }
                    renderItem={ ({ item }) =>
                        <TouchableOpacity onPress={() => navigation.navigate(nextScreen, {'request': item, 'isMyProfile': isMyProfile})}>
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
                    keyExtractor={(item, index) => index}
                />
            </View>
        );
    };
};
