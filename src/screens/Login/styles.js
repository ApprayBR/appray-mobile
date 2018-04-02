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
    login: {
    },
    password: {
    },
    loginButtonContainer: {
      width: '100%',
      alignItems: 'center',
    },
    loginButton: {
      width: '60%',
      marginTop: 10,
      paddingTop: 20,
      paddingBottom: 20,
      backgroundColor: colors.primary,
      borderRadius: 10,
    },
    loginButtonText: {
      color: 'white',
      textAlign: 'center',
    },
    signupText: {
      backgroundColor: 'transparent',
      color: colors.primary,
      paddingTop: metrics.padding,
    }
  });
