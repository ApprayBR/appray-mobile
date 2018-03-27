import { StyleSheet, Platform } from 'react-native';

import {colors, fonts, metrics} from 'appray/src/styles'

const styles = StyleSheet.create({
  exceptionContainer: {
    height: metrics.containerHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderContainer: {
    height: metrics.containerHeight,
    justifyContent: 'center',
  },
  container: {
    height: metrics.containerHeight,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',  
    paddingBottom: metrics.padding,
    borderBottomWidth: 1,
    borderColor: colors.light,
    margin: metrics.padding,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    resizeMode: 'cover',
    marginRight: metrics.padding,
    marginLeft: metrics.padding,
  },
  textsContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  title: {
    fontWeight: 'bold',
    fontSize: fonts.big,
  },
  descriptionContainer:{
  },
  description: {
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
});

export default styles;
