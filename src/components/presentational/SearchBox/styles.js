import React from 'react';
import { StyleSheet } from 'react-native';

import { metrics, colors } from 'appray/src/styles';

export default styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 20,
        height: 20,
        marginRight: 5,
    },
    textInput: {
        height: 45,
        width: '90%',
        borderRadius: 5,
        borderColor: colors.light,
        borderWidth: 1,
        marginTop: metrics.padding,
        marginBottom: metrics.padding,
    },

});