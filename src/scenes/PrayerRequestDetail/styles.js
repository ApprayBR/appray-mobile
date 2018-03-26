import React from 'react';
import { StyleSheet } from 'react-native';

import { metrics, colors, fonts } from 'appray/src/styles';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: metrics.padding,
    },
    upper: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    image: {
      width: 100,
      height: 150,
      resizeMode: 'cover',
      marginRight: metrics.padding,
      marginLeft: metrics.padding,
    },
    textsContainer: {
      flex: 1,
    },
    titleDescription: {
      alignItems: 'flex-start',
    },
    title: {
      fontWeight: 'bold',
      fontSize: fonts.big,
    },
    shortDescription: {
      marginTop: 5,
    },
    bottom: {
      marginTop: metrics.padding,
      alignItems: 'center',
    },
    trailer: {
      marginTop: 60,
      alignItems: 'flex-start',
    },
    description: {
      margin: metrics.padding,
      textAlign: 'justify',
    },
  });
