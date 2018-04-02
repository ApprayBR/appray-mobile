import { StyleSheet } from 'react-native';

import { colors, fonts, metrics } from 'appray/src/styles';

export default StyleSheet.create({
    safeArea: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    container: {
        flex: 1,
        paddingVertical: 30,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    gradient: {
        ...StyleSheet.absoluteFillObject
    },
    scrollview: {
        flex: 1
    },
    containerDark: {
    },
    title: {
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    titleDark: {
    },
    subtitle: {
        marginTop: 5,
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.75)',
        fontSize: 13,
        fontStyle: 'italic',
        textAlign: 'center',
        color: colors.regular,
    },
    slider: {
        marginTop: 15,
        overflow: 'visible', // for custom animations
    },
    sliderContentContainer: {
        paddingVertical: 10, // for custom animation
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    paginationContainer: {
        paddingVertical: 8
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 8
    }
});