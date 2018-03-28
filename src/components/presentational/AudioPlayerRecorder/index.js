import React, {Component} from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  PermissionsAndroid,
  Image,
} from 'react-native';

import Sound from 'react-native-sound';
import {AudioRecorder, AudioUtils} from 'react-native-audio';
import styles from './styles';

class AudioPlayerRecorder extends Component {

    state = {
      currentTime: 0.0,
      recording: false,
      paused: false,
      stoppedRecording: false,
      finished: false,
      audioPath: AudioUtils.DocumentDirectoryPath + '/test.aac',
      hasPermission: undefined,
      fileSent: false,
    };

    prepareRecordingPath(audioPath){
      AudioRecorder.prepareRecordingAtPath(audioPath, {
        SampleRate: 22050,
        Channels: 1,
        AudioQuality: "Low",
        AudioEncoding: "aac",
        AudioEncodingBitRate: 32000
      });
    }

    componentDidMount() {
      this._checkPermission().then((hasPermission) => {
        this.setState({ hasPermission });

        if (!hasPermission) return;

        this.prepareRecordingPath(this.state.audioPath);

        AudioRecorder.onProgress = (data) => {
          this.setState({currentTime: Math.floor(data.currentTime)});
        };

        AudioRecorder.onFinished = (data) => {
          // Android callback comes in the form of a promise instead.
          if (Platform.OS === 'ios') {
            this._finishRecording(data.status === "OK", data.audioFileURL);
          }
        };
      });
    }

    _checkPermission() {
      if (Platform.OS !== 'android') {
        return Promise.resolve(true);
      }

      const rationale = {
        'title': 'Microphone Permission',
        'message': 'AudioExample needs access to your microphone so you can record audio.'
      };

      return PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.RECORD_AUDIO, rationale)
        .then((result) => {
          console.log('Permission result:', result);
          return (result === true || result === PermissionsAndroid.RESULTS.GRANTED);
        });
    }

    _renderRecordButton(onPress, active) {
      var style = (active) ? styles.activeButtonText : styles.buttonText;
      var currentTime = this.state.currentTime
      var image

      if (currentTime === 0 || this.state.paused ) {
        image = require('appray/src/resources/images/record_audio.png')
      } else {
        image = require('appray/src/resources/images/audio_pause.png');
      }
      return (
        <TouchableOpacity style={styles.button} onPress={onPress} >
          <Image
            style={styles.button}
            source={ image }
          />
        </TouchableOpacity>
      );
    }

    _renderPlayButton(onPress, active) {
      var isDisabled = this.state.currentTime === 0 || !this.state.paused
      var style = isDisabled ? styles.disabledButtonText : styles.activeButtonText;
      return (
        <TouchableOpacity onPress={onPress} disabled={ isDisabled }>
          <Image
            style={[styles.button, style]}
            source={ require('appray/src/resources/images/audio_play.png') }
          />
        </TouchableOpacity>
      );
    }


    _renderStopButton(onPress, active) {
      var isDisabled = this.state.currentTime === 0 || !this.state.paused
      var style = isDisabled ? styles.disabledButtonText : styles.activeButtonText;
      return (
        <TouchableOpacity onPress={onPress} disabled={ isDisabled }>
          <Image
            style={[styles.button, style]}
            source={ require('appray/src/resources/images/trash_icon.png') }
          />
        </TouchableOpacity>
      );
    }

    _renderSendOption(onPress, active) {
      var isDisabled = this.state.currentTime === 0 || !this.state.paused
      var style = isDisabled ? styles.addNewDisabled : styles.addNew;
      return (
        <View style={ style }>
          <TouchableOpacity onPress={ () => this._sendPrayer() }
                            disabled={ isDisabled }>
              <View style={styles.addTextContainer}>
                  <Text style={styles.addText}>Enviar Oração</Text>
              </View>
          </TouchableOpacity>
        </View>
      );
    }

    _sendPrayer() {
      this.setState({fileSent: true});
    }

    async _pause() {
      if (!this.state.recording) {
        console.warn('Can\'t pause, not recording!');
        return;
      }

      try {
        const filePath = await AudioRecorder.pauseRecording();
        this.setState({paused: true});
      } catch (error) {
        console.error(error);
      }
    }

    async _resume() {
      if (!this.state.paused) {
        console.warn('Can\'t resume, not paused!');
        return;
      }

      try {
        await AudioRecorder.resumeRecording();
        this.setState({paused: false});
      } catch (error) {
        console.error(error);
      }
    }

    async _stop() {
      if (!this.state.recording) {
        console.warn('Can\'t stop, not recording!');
        return;
      }

      this.setState({stoppedRecording: true, recording: false, paused: false, currentTime: 0});

      try {
        const filePath = await AudioRecorder.stopRecording();

        if (Platform.OS === 'android') {
          this._finishRecording(true, filePath);
        }
        return filePath;
      } catch (error) {
        console.error(error);
      }
    }

    async _play() {
      if (this.state.recording) {
        await this._pause();
      }

      // These timeouts are a hacky workaround for some issues with react-native-sound.
      // See https://github.com/zmxv/react-native-sound/issues/89.
      setTimeout(() => {
        var sound = new Sound(this.state.audioPath, '', (error) => {
          if (error) {
            console.log('failed to load the sound', error);
          }
        });

        setTimeout(() => {
          sound.play((success) => {
            if (success) {
              console.log('successfully finished playing');
            } else {
              console.log('playback failed due to audio decoding errors');
            }
          });
        }, 100);
      }, 100);
    }

    async _record() {
      if (this.state.recording) {
        console.warn('Already recording!');
        return;
      }

      if (!this.state.hasPermission) {
        console.warn('Can\'t record, no permission granted!');
        return;
      }

      if(this.state.stoppedRecording){
        this.prepareRecordingPath(this.state.audioPath);
      }

      this.setState({recording: true, paused: false});

      try {
        const filePath = await AudioRecorder.startRecording();
      } catch (error) {
        console.error(error);
      }
    }

    _finishRecording(didSucceed, filePath) {
      this.setState({ finished: didSucceed });
      console.log(`Finished recording of duration ${this.state.currentTime} seconds at path: ${filePath}`);
    }

    _renderPlayerOrMessage() {
      if(this.state.fileSent) {
        return (
          <View style={styles.fileSentContainer}>
            <Image
              style={styles.correctSign}
              source={ require('appray/src/resources/images/correct_sign.png') }
            />
            <Text style={styles.title}> Oração enviada! </Text>
          </View>
        );
      }
      
      return (
        <View style={styles.controls}>
          <View style={styles.counter}>
            <Text style={styles.progressText}>{this.state.currentTime} s</Text>
          </View>
          <View style={styles.buttons}>
            {this._renderRecordButton(() => {this.state.currentTime === 0 ? this._record() : this.state.paused ? this._resume() : this._pause()}, this.state.recording )}
            {this._renderPlayButton(() => {this._play()} )}
            {this._renderStopButton(() => {this._stop()} )}
          </View>
          {this._renderSendOption()}
        </View>
      );
    }

    render() {
      return this._renderPlayerOrMessage()
    }
}

export default AudioPlayerRecorder;
