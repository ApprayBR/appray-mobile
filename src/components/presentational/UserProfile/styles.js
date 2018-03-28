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
  upperMyProfile: {
    alignItems: 'center',
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
  imageMyProfile: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    marginBottom: metrics.padding,
    borderRadius: 100,
  },
  textsContainerMyProfile: {
    alignItems: 'center',
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
  },
  upperTitleTexts: {
    alignItems: 'flex-start',
  },
  upperValueTexts: {
    alignItems: 'flex-start',
  },
  title: {
    fontWeight: 'bold',
    fontSize: fonts.big,
  },
  shortDescription: {
    marginTop: 15,
  },
  bottom: {
    marginTop: metrics.padding,
    marginLeft: 5,
    height: '60%',
  },
  description: {
    margin: metrics.padding,
  },
  requestsContainer: {
    marginTop: 20,
  },
  requestImage: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
    backgroundColor: 'transparent',
  },
  logout: {
    marginTop: metrics.padding,
    backgroundColor: 'transparent',
    alignItems: 'center',
    
  },
  logoutContainer: {
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: colors.primary,
    borderRadius: 10,
    width: 200,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutText: {
    textAlign: 'center',
    alignItems: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
});
