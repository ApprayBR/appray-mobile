import { StyleSheet } from 'react-native';

import { fonts, colors, metrics } from 'appray/src/styles';

export default styles = StyleSheet.create({
    container: {
    },
    backgroundImage: {
      resizeMode: 'cover',
      position: 'absolute',
    },
    header: {
      height: metrics.headerHeight,
      paddingTop: metrics.headerPadding + 30,
      paddingHorizontal: metrics.headerPadding,
    },
    arrowBack: {
      backgroundColor: 'transparent',
      color: colors.primary,
    },
    body: {
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    topMessageContainer: {
      alignItems: 'center',
      marginTop: 50,
      width: '80%',
    },
    topMessageImage: {

    },
    topMessageText: {
      paddingTop: metrics.padding,
      color: colors.regular,
      textAlign: 'center',
    },
    facebook: {
      marginTop: 100,
    },
    middleTextContainer: {
      paddingVertical: metrics.padding*2,
    },
    middleText: {
      fontSize: fonts.regular,
      color: colors.regular,
    },
    emailButtonContainer: {
      width: '100%',
      alignItems: 'center',
    },
    emailButton: {
      width: '60%',
      paddingTop: 20,
      paddingBottom: 20,
      backgroundColor: colors.primary,
      borderRadius: 10,
    },
    touchableEmail: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    emailImage: {
      marginHorizontal: 5,
    },
    emailButtonText: {
      color: 'white',
      textAlign: 'center',
      alignItems: 'center',
    },
    loginText: {
      backgroundColor: 'transparent',
      color: colors.primary,
      paddingTop: metrics.padding,
    }
  });
