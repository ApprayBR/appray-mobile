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
    width: 300,
  },
  shortContainer: {
    alignItems: 'center',
  },
  descriptionContainer: {
    alignItems: 'center',
  },
  textInput: {
    height: 45,
    width: 300,
    borderRadius: 5,
    borderColor: colors.light,
    borderWidth: 1,
  },
  textInputDescription: {
    height: 200,
    width: 300,
    borderRadius: 5,
    borderColor: colors.light,
    borderWidth: 1,
  },
});
