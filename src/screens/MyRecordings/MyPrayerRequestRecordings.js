import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import AudioPlayerRecorder from 'appray/src/components/presentational/AudioPlayerRecorder';
import { getRecordingsForMyPrayerRequest } from 'appray/src/actions/prayerRequests';
import MyRecordings from 'appray/src/components/presentational/MyRecordings';

class MyPrayerRequestRecordingsScreen extends Component {
    static navigationOptions = {
        headerTitle: 'Orações Recebidas',
    };

    componentWillMount() {
      this.props.getRecordingsForMyPrayerRequest(this.props.navigation.state.params.request.id);
    }

    downloadAndPlay(recording) {
      alert("Ouvindo oração: " + recording.url);
    }

    delete(recording) {
      alert("Deletando oração: " + recording.url);
    }

    render() {
      const { myPrayerRequestRecordings } = this.props;
      const { request } = this.props.navigation.state.params;
      
      return (
        <MyRecordings myRecordings={ myPrayerRequestRecordings } isMyProfile={ false } prayerRequest={ request } />
      );
    }
  }

const mapStateToProps = (state) => {
  return {
    myPrayerRequestRecordings: state.requests.myPrayerRequestRecordings,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getRecordingsForMyPrayerRequest }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPrayerRequestRecordingsScreen);
