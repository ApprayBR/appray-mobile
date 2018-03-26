import { StyleSheet } from 'react-native';

import { fonts, colors, metrics } from 'appray/src/styles';

export default styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'flex-end',
      width: '100%',
      height: '100%',
    },
    backgroundImage: {
      resizeMode: 'cover',
      position: 'absolute',
    },
    button: {
      width: '45%',
      height: 50,
      paddingTop: 20,
      paddingBottom: 20,
      marginHorizontal: 10,
      marginBottom: 40,
      backgroundColor: colors.primary,
      borderRadius: 10,
      justifyContent: 'center',
    },
    buttonFirstText: {
      color: colors.lighter,
      textAlign: 'center',
      fontSize: fonts.small,
    },
    buttonSecondText: {
      color: 'white',
      textAlign: 'center',
      fontSize: fonts.regular,
      fontWeight: 'bold',
      paddingTop: 5,
    },
  });
