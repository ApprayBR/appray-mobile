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
    textInputContainer: {
      width: '80%',
      marginTop: 100,
    },
    textInput: {
      height: 40,
      borderRadius: 5,
      borderColor: colors.light,
      borderWidth: 1,
      marginBottom: metrics.padding,
      backgroundColor: colors.lighter,
    },
    createAccountButtonContainer: {
      width: '100%',
      alignItems: 'center',
      marginTop: metrics.padding,
    },
    createAccountButton: {
      width: '60%',
      paddingTop: 20,
      paddingBottom: 20,
      backgroundColor: colors.primary,
      borderRadius: 10,
    },
    touchableAccount: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    createAccountImage: {
      marginHorizontal: 5,
      width: 36,
      height: 36,
      resizeMode: 'cover',
    },
    createAccountButtonText: {
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
