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
  list: {
    margin: metrics.padding,
    width: '70%',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: colors.light,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: colors.lighter,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemTextContainer: {
  },
  title: {
      fontWeight: 'bold',
      margin: 5 ,
  },
  button: {
      width: 40,
      height: 40,
      marginLeft: 5,
  },
  trash: {
    width: 40,
    height: 40,
    margin: 5,
  },
});


export default styles;