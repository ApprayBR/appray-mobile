import React, { Component } from 'react';
import { View } from 'react-native'

import { styles } from './styles'
import PrayerRequestsListContainer from 'appray/src/components/container/PrayerRequestsList';
import SearchBox from 'appray/src/components/presentational/SearchBox';

export default class HomeScreen extends Component {
    render() {
        const { navigation } = this.props;

        return (
            <View style={styles.container}>
                <SearchBox />
                <PrayerRequestsListContainer navigation={navigation}/>
            </View>
        );
    }
}