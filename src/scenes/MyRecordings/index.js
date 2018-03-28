import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import AudioPlayerRecorder from 'appray/src/components/presentational/AudioPlayerRecorder';

class MyRecordingsScreen extends Component {
    static navigationOptions = {
        headerTitle: 'Orações Recebidas',
    };

    componentWillMount() {
    }

    render() {
      const { request } = this.props.navigation.state.params;
      
      return (
        <View style={styles.container}>
          
        </View>
      );
    }
  }

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MyRecordingsScreen);
