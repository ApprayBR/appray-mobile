
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, TabNavigator, StackNavigator, Platform } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import InitScreen from 'appray/src/screens/Init';
import LoginScreen from 'appray/src/screens/Login';
import SignupScreen from 'appray/src/screens/Signup';
import SignupEmailScreen from 'appray/src/screens/SignupEmail';
import HomeScreen from 'appray/src/screens/Home';
import MyProfileScreen from 'appray/src/screens/Profile/MyProfile';
import MyPrayerRequestsScreen from 'appray/src/screens/MyRequests';
import MyNewPrayerRequestScreen from 'appray/src/screens/MyNewRequests';
import PeopleProfileScreen from 'appray/src/screens/Profile/PeopleProfile';
import PrayerRequestDetailScreen from 'appray/src/screens/PrayerRequestDetail';
import RecordingScreen from 'appray/src/screens/Recording';
import MyRecordingsScreen from 'appray/src/screens/MyRecordings';
import PeopleShuffleListScreen from 'appray/src/screens/PeopleShuffleList';
import PeopleShuffleDetailScreen from 'appray/src/screens/PeopleShuffleDetail';

import { metrics, colors } from 'appray/src/styles';

const MainNavigator =  TabNavigator ({
    PeopleRequests: {
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
                screen: PeopleProfileScreen
            },
        },
        {   
            navigationOptions: {
                headerTitle: 'Lista de Pedidos',
                title: 'Pedidos',
                tabBarIcon: ({ tintColor, focused }) => (
                    <Ionicons
                        name={focused ? 'ios-list-outline' : 'ios-list-outline'}
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
                    alignSelf: 'center',
 					textAlign:'center',
                },
                headerBackTitleStyle: {
                    color: 'white',
                },
            }
            
        }),
    },
    People: {
        screen: StackNavigator({
            PeopleShuffleList: {
                screen: PeopleShuffleListScreen
            },
            PeopleShuffleDetail: {
                screen: PeopleShuffleDetailScreen
            },
            PeopleProfile: {
                screen: PeopleProfileScreen
            },
        },
        {   
            navigationOptions: {
                headerTitle: 'Pessoas',
                title: 'Pessoas',
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
                    alignSelf: 'center',
 					textAlign:'center',
                },
                headerBackTitleStyle: {
                    color: 'white',
                },
            }
            
        }),
    },
    
    MyRequests: {
        screen: StackNavigator({
            MyPrayerRequestsList: {
                screen: MyPrayerRequestsScreen
            },
            MyPrayerRequestDetail: {
                screen: PrayerRequestDetailScreen
            },
            MyNewPrayerRequest: {
                screen: MyNewPrayerRequestScreen
            },
            MyPrayerRequestRecording: {
                screen: MyRecordingsScreen
            }
        },
        {
            navigationOptions: {
                headerTitle: 'Meus Pedidos',
                title: 'Meus Pedidos',
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
                    alignSelf: 'center',
                    textAlign:'center',
                },
                headerBackTitleStyle: {
                    color: 'white',
                },
            }
            
        }),
    },
    Profile: {
        screen: StackNavigator({
            MyProfile: {
                screen: MyProfileScreen
            },
        },
        {
            navigationOptions: {
                headerTitle: 'Meu Perfil',
                title: 'Perfil',
                tabBarIcon: ({ tintColor, focused }) => (
                    <Ionicons
                        name={focused ? 'ios-person' : 'ios-person-outline'}
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
                    alignSelf: 'center',
                    textAlign:'center',
                },
                headerBackTitleStyle: {
                    color: 'white',
                },
            }
            
        }),
    },
},
{
    ...TabNavigator.Presets.iOSBottomTabs, // or AndroidTopTabs
    tabBarPosition: "bottom",
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