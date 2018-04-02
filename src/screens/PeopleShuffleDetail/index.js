import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity, FlatList } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { styles, nav_styles } from './styles';
import { logout } from 'appray/src/actions/login';
import AudioPlayerRecorder from 'appray/src/components/presentational/AudioPlayerRecorder';
import SliderEntry from 'appray/src/components/presentational/SliderEntry';

class PeopleShuffleDetailScreen extends Component {
    static navigationOptions = {
        headerTitle: 'Ore',
    };

    componentDidMount() {
    };

    render() {
        const { navigation } = this.props;
        const { user } = navigation.state.params;
        
        return (
            <View style={ styles.container }>
                <View>
                    <SliderEntry data={ user } />
                </View>
                <View>
                    <AudioPlayerRecorder />
                </View>
            </View>
               
        );
    };
};

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ }, dispatch);
};
  
export default connect(mapStateToProps, mapDispatchToProps)(PeopleShuffleDetailScreen);