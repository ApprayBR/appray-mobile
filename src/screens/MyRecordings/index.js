import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import AudioPlayerRecorder from 'appray/src/components/presentational/AudioPlayerRecorder';
import { getRecordingsForMyPrayerRequest } from 'appray/src/actions/prayerRequests';

class MyRecordingsScreen extends Component {
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
        <View style={styles.container}>
          <Text style={ styles.title } > Orações recebidas neste pedido de {request.type}: </Text>
          <FlatList
            style={ styles.list }
            data={ myPrayerRequestRecordings }
            renderItem={ ({ item }) =>
              <View style={ styles.item }>
                <View style={ styles.itemLeft }>
                  <TouchableOpacity onPress={() => this.downloadAndPlay(item)}>
                    <Image
                      style={ styles.button }
                      source={ require('appray/src/resources/images/audio_play.png') }
                    />
                  </TouchableOpacity>
                  <View style={ styles.itemTextContainer }>
                    <Text style={ styles.title }> {item.date} </Text>
                    <Text style={ styles.title }> {item.duration} </Text>
                  </View>
                </View>
                <TouchableOpacity onPress={() => this.delete(item)}>
                  <Image
                    style={ styles.trash }
                    source={ require('appray/src/resources/images/trash_icon.png') }
                  />
                </TouchableOpacity>
              </View>
            }
            keyExtractor={(item, index) => index}
          />
        </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(MyRecordingsScreen);
