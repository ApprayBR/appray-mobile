import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { metrics, colors, fonts } from 'appray/src/styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: metrics.padding,
  },
  categoryContainer: {
    alignItems: 'center',
  },
  pickerContainer: {
    width: 300,
    height: 200,
    borderRadius: 5,
    borderColor: colors.light,
    borderWidth: 1,
  },
  shortContainer: {
    alignItems: 'center',
  },
  descriptionContainer: {
    alignItems: 'center',
  },
  title: {
    fontStyle: 'italic',
  },
  textInput: {
    height: 45,
    width: 300,
    borderRadius: 5,
    borderColor: colors.light,
    borderWidth: 1,
  },
  textInputDescription: {
    height: 150,
    width: 300,
    borderRadius: 5,
    borderColor: colors.light,
    borderWidth: 1,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  buttonImage: {
    width: 30,
    height: 30,
    resizeMode: 'cover',
    backgroundColor: 'transparent',
  },
  buttonInnerContainer: {
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
  buttonText: {
    textAlign: 'center',
    alignItems: 'center',
    color: 'white',
    fontWeight: 'bold',
    marginLeft: metrics.padding,
  },
});
