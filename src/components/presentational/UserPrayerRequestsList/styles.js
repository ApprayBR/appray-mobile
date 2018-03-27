import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
    marginLeft: metrics.padding,
  },
  image: {
    width: 100,
    height: 150,
    resizeMode: 'cover',
    marginRight: metrics.padding,
  },
  textsContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  fullName: {
    fontWeight: 'bold',
    fontSize: fonts.big,
    marginBottom: metrics.padding,
  },
  mediumText: {
    fontWeight: 'bold',
    fontSize: fonts.medium,
  },
  upperTexts: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: fonts.big,
  },
  shortDescription: {
    marginTop: 3,
  },
  description: {
    margin: metrics.padding,
  },
  requestsContainer: {
    marginTop: metrics.padding,
    marginRight: metrics.padding,
  },
  row: {
    margin: 5,
    borderBottomWidth: 1,
    borderColor: colors.light,
  },
  requestImage: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
    backgroundColor: 'transparent',
  }
});
