import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import AudioPlayerRecorder from 'appray/src/components/presentational/AudioPlayerRecorder';
import { getRecordingsForMyPrayerRequest } from 'appray/src/actions/prayerRequests';

export default class MyRecordings extends Component {
    downloadAndPlay(recording) {
        alert("Ouvindo oração: " + recording.url);
    }

    delete(recording) {
        alert("Deletando oração: " + recording.url);
    }

    render() {
      const { myRecordings, isMyProfile, prayerRequest } = this.props;
      var title = '';

      if (isMyProfile) {
        title = 'Orações recebidas para o meu Perfil:'
        if (!myRecordings || myRecordings.lenght === 0) {
            title = 'Você ainda não recebeu orações no seu Perfil'
        }
      } else {
        title = 'Orações recebidas neste pedido de ' + prayerRequest.type + ':'
        if (!myRecordings || myRecordings.lenght === 0) {
            title = 'Você ainda não recebeu orações neste Pedido'
        }
      }

      return (
        <View style={styles.container}>
          <Text style={ styles.title } > { title } </Text>
          <FlatList
            style={ styles.list }
            data={ myRecordings }
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
