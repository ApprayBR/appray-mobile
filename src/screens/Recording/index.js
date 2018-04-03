import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import AudioPlayerRecorder from 'appray/src/components/presentational/AudioPlayerRecorder';
import { getHelpfulVersesFromAPI } from 'appray/src/actions/verses';

class RecordingScreen extends Component {
    static navigationOptions = {
      headerTitle: 'Ore Pelo Pedido',
    };
    componentWillMount() {
      this.props.getHelpfulVersesFromAPI(this.props.navigation.state.params.request.type);
    }

    render() {
      const { helpfulVerses } = this.props;
      const { request } = this.props.navigation.state.params;
      
      return (
        <View style={styles.container}>
          
          <View style={styles.upper}>
            <View style={styles.titleContainer}>
              <Image
                style={styles.attentionSign}
                source={ require('appray/src/resources/images/attention_sign.png') }
              />
              <Text style={styles.title}>
                Orientação bíblica sobre {request.type}:
              </Text>
            </View>
            
            <View>
              <FlatList
                style={ styles.versesContainer }
                data={ helpfulVerses }
                renderItem={ ({ item }) =>
                  <View style={ styles.row }>
                      <View style={ styles.textsContainer }>
                          <Text style={ styles.source }> { item.source }: </Text> 
                          <Text style={ styles.text }> "{ item.text }" </Text>
                      </View>
                  </View>
                }
                keyExtractor={(item, index) => index}
              />
            </View>
          </View>

          <View style={styles.bottom}>
            <AudioPlayerRecorder />
          </View>

        </View>
      );
    }
  }

const mapStateToProps = (state) => {
  return {
    helpfulVerses: state.verses.helpfulVerses,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getHelpfulVersesFromAPI }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(RecordingScreen);
