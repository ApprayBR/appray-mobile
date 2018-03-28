import { StyleSheet } from 'react-native';

import { fonts, colors, metrics } from 'appray/src/styles';

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        margin: metrics.padding,    
    },
    upper: {
        justifyContent: 'flex-start',
        height: '60%',
    },
    versesContainer: {
        borderWidth: 1,
        borderColor: colors.light,
        borderRadius: 10,
        marginVertical: metrics.padding,
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    attentionSign: {
        height: 40,
        width: 40,
        marginRight: 5,
    },
    title: {
        textAlign: 'justify',
        fontSize: fonts.big,
        fontWeight: 'bold',
    },
    row: {
        borderBottomWidth: 1,
        borderColor: colors.light,
        marginHorizontal: metrics.padding,
    },
    bottom: {
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    source: {
        fontWeight: 'bold',
        margin: metrics.padding,
    },
    text: {
        marginHorizontal: metrics.padding,
        textAlign: 'justify',
        fontStyle: 'italic',
        marginBottom: 5,
    },
  });

  export default styles;
  