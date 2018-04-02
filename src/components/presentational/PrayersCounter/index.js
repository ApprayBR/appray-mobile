import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image } from 'react-native';

import { styles } from './styles';

export default class PrayersCounter extends Component {
    render() {
        const { prayersCount } = this.props;
        return (
            <View style={ styles.actions }>
                <Image style={ styles.actionsImage } source={ require('appray/src/resources/images/pray_icon.png') } />
                <Text style={ styles.actionsCountText }> { prayersCount || 0 } pessoas oraram por isso </Text>
            </View>
        );
    };
};
