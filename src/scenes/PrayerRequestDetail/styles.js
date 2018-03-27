import React from 'react';
import { StyleSheet } from 'react-native';

import { metrics, colors, fonts } from 'appray/src/styles';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: metrics.padding,
      alignItems: 'center',
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
      marginRight: metrics.padding,
    },
    titleDescription: {
      alignItems: 'flex-start',
    },
    title: {
      fontWeight: 'bold',
      fontSize: fonts.big,
    },
    requestImage: {
      width: 30,
      height: 30,
      resizeMode: 'cover',
      backgroundColor: 'transparent',
    },
    titleContainer: {
      flexDirection: 'row',
      justifyContent: 'center',  
      alignItems: 'center',
      marginBottom: metrics.padding,
    },
    shortDescription: {
      marginTop: 5,
    },
    descriptionContainer: {
      alignItems: 'center',
      height: '30%',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: colors.light,
      margin: metrics.padding,
    },
    description: {
      margin: metrics.padding,
      textAlign: 'justify',
    },
    pray: {
      marginTop: metrics.padding,
      backgroundColor: 'transparent',
    },
    prayingContainer: {
      alignItems: 'center',
      marginTop: metrics.padding,
    },
    prayingImage: {
      width: 50,
      height: 50,
      alignItems: 'center',
    },
    prayingTextContainer: {
      marginTop: 10,
      paddingTop: 20,
      paddingBottom: 20,
      backgroundColor: colors.primary,
      borderRadius: 10,
      width: 200,
    },
    prayingText: {
      textAlign: 'center',
      alignItems: 'center',
      color: 'white',
      fontWeight: 'bold',
    }
  });
