import { StyleSheet } from 'react-native';

import { fonts, colors, metrics } from 'appray/src/styles';

var styles = StyleSheet.create({
  controls: {
      backgroundColor: colors.primary,
      borderRadius: 10,
      width: '70%',
      marginTop: metrics.padding,
  },
  progressText: {
    fontSize: fonts.bigger,
    color: "#fff",
  },
  counter: {
      alignItems: 'center',
      borderBottomWidth: 1,
      borderColor: colors.light,
      marginHorizontal: metrics.padding,
      marginTop: 5,
  },
  buttons: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',    
      margin: metrics.padding,
  },
  button: {
    height: 40,
    width: 40,
  },
  buttonText: {
    fontSize: fonts.regular,
    color: "#fff"
  },
  activeButtonText: {
    opacity: 1,
  },
  disabledButtonText: {
    opacity: 0.2,

  },
  addNew: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    opacity: 1,
  },
  addNewDisabled: {
      backgroundColor: 'transparent',
      alignItems: 'center',
      opacity: 0.2,
  },
  addTextContainer: {
      marginTop: 10,
      paddingBottom: 20,
      backgroundColor: colors.primary,
      borderRadius: 10,
      width: 240,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
  },
  addText: {
      textAlign: 'center',
      alignItems: 'center',
      color: 'white',
      fontWeight: 'bold',
  },
  fileSentContainer: {
    alignItems: 'center',
    marginBottom: metrics.padding,
  },
  correctSign: {
    width: 80,
    height: 80,
  }
});

  export default styles;
  