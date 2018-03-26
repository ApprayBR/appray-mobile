import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { metrics, colors } from 'appray/src/styles';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      },
      welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
      },
});

export const nav_styles = {
    tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
        name={focused ? 'ios-person' : 'ios-person-outline'}
        size={26}
        style={{ color: tintColor }}
        />
    ),
    headerStyle: {
        height: metrics.headerHeight,
        paddingTop: metrics.headerPadding,
        backgroundColor: colors.primary,
    },
    headerTitleStyle: {
        marginTop: metrics.headerPadding,
        color: 'white',
    },
    headerBackTitleStyle: {
        color: 'white',
    },
};