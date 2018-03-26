
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, TabNavigator, StackNavigator, Platform } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import InitScreen from 'appray/src/scenes/Init';
import LoginScreen from 'appray/src/scenes/Login';
import SignupScreen from 'appray/src/scenes/Signup';
import SignupEmailScreen from 'appray/src/scenes/SignupEmail';
import HomeScreen from 'appray/src/scenes/Home';
import ProfileScreen from 'appray/src/scenes/Profile';
import PrayerRequestDetailScreen from 'appray/src/scenes/PrayerRequestDetail';
import RecordingScreen from 'appray/src/scenes/Recording';
import { metrics, colors } from 'appray/src/styles';

const MainNavigator =  TabNavigator ({
    People: {
        screen: StackNavigator({
            PeoplePrayerRequestsList: {
                screen: HomeScreen
            },
            PeoplePrayerRequestDetail: {
                screen: PrayerRequestDetailScreen
            },
            PrayerRequestRecording: {
                screen: RecordingScreen
            },
            PeopleProfile: {
                screen: ProfileScreen
            },
        },
        {
            navigationOptions: {
                headerTitle: 'People\'s Requests',
                tabBarIcon: ({ tintColor, focused }) => (
                    <Ionicons
                        name={focused ? 'ios-people' : 'ios-people-outline'}
                        size={26}
                        style={{ color: tintColor }}
                    />
                ),
                headerStyle: {
                    height: metrics.headerHeight,
                    paddingTop: metrics.headerPadding,
                    backgroundColor: colors.primary,
                },
                headerTitleStyle: {
                    marginTop: metrics.headerPadding,
                    color: 'white',
                },
                headerBackTitleStyle: {
                    color: 'white',
                },
            }
            
        }),
    },
    Requests: {
        screen: StackNavigator({
            MyRequestsList: {
                screen: HomeScreen
            },
            MyRequestDetail: {
                screen: PrayerRequestDetailScreen
            },
        },
        {
            navigationOptions: {
                headerTitle: 'My Requests',
                tabBarIcon: ({ tintColor, focused }) => (
                    <Ionicons
                        name={focused ? 'ios-flame' : 'ios-flame-outline'}
                        size={26}
                        style={{ color: tintColor }}
                    />
                ),
                headerStyle: {
                    height: metrics.headerHeight,
                    paddingTop: metrics.headerPadding,
                    backgroundColor: colors.primary,
                },
                headerTitleStyle: {
                    marginTop: metrics.headerPadding,
                    color: 'white',
                },
                headerBackTitleStyle: {
                    color: 'white',
                },
            }
            
        }),
    },
    MyProfile: {
        screen: ProfileScreen
    },
});

export const AppNavigator = StackNavigator({
        Init: {
            screen: InitScreen,
        },    
        Login: {
            screen: LoginScreen,
        },
        Signup: {
            screen: StackNavigator({
                SignupInit: {
                    screen: SignupScreen
                },
                SignupEmail: {
                    screen: SignupEmailScreen
                },
            },
            { 
                headerMode: 'none' // This avoids duplicated headers by not rendering this navigation Stack header.
            }),
        },
        Main: {
            screen: MainNavigator,
        },  
    },
    { 
        headerMode: 'none' // This avoids duplicated headers by not rendering this navigation Stack header.
    }
);

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={ addNavigationHelpers({ dispatch, state: nav }) } />
);

const mapStateToProps = state => ({
    nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);