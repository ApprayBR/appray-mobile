import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import AudioPlayerRecorder from 'appray/src/components/presentational/AudioPlayerRecorder';
import { getRecordingsForMyProfile } from 'appray/src/actions/prayerRequests';
import MyRecordings from 'appray/src/components/presentational/MyRecordings';

class MyProfileRecordingsScreen extends Component {
    static navigationOptions = {
        headerTitle: 'Orações Recebidas',
    };

    componentWillMount() {
      this.props.getRecordingsForMyProfile(this.props.navigation.state.params.user.id);
    }

    render() {
      const { myProfileRecordings } = this.props;
      const { user } = this.props.navigation.state.params;
      
      return (
        <MyRecordings myRecordings={ myProfileRecordings } isMyProfile={ true } />
      );
    }
  }

const mapStateToProps = (state) => {
  return {
    myProfileRecordings: state.requests.myProfileRecordings,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getRecordingsForMyProfile }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MyProfileRecordingsScreen);
