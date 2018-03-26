import { Platform } from 'react-native';

export default {
  padding: 15,
  ...Platform.select({
    ios: { headerHeight: 64, headerPadding: 20 },
    android: { headerHeight: 44, headerPadding: 10 },
  }),
  tabBarHeight: 50,
  containerHeight: Platform.select({ // Android buttons menu at the bottom makes the vertical space smaller than ios
    ios: '90%',
    android: '85%',
  })
};