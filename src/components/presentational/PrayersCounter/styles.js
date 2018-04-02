import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { metrics, colors, fonts } from 'appray/src/styles';

export const styles = StyleSheet.create({
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  actionsImage: {
    width: 20,
    height: 20,
    resizeMode: 'cover',
    backgroundColor: 'transparent',
  },
  actionsCountText: {

  },
});
