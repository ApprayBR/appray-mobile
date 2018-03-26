import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Button, Text, View, Image, Linking, WebView, TouchableHighlight } from 'react-native';

import { styles } from './styles';

export default class  PrayerRequestDetailScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Details',
  };
  
  render() {
    const { navigate } = this.props.navigation;
    const { request } = this.props.navigation.state.params;

    return (
      <View style={ styles.container }>
          
          <View style={ styles.upper }>
            <Image source={{ uri: request.image }}  style={styles.image} /> 
            <View style={ styles.textsContainer }>
              <View style={ styles.titleDescription }>
                <Text style={ styles.title }> { request.type } </Text> 
                <Text style={ styles.shortDescription }> { request.short_description }</Text>
              </View>
            </View>
          </View>
          
          <View style={ styles.descriptionContainer }>
            <ScrollView>
              <Text style={ styles.description }>{ request.description }</Text>
            </ScrollView>
          </View>

          <View style={ styles.pray }>
              <TouchableHighlight onPress={ () => navigate('PrayerRequestRecording', {'request': request}) }>
                <View style={styles.prayingContainer} >
                  <Image source={ require('appray/src/resources/images/praying-hands.png') } style={styles.prayingImage} />
                  <View style={styles.prayingTextContainer}>
                    <Text style={styles.prayingText}>Pray for this</Text>
                  </View>
                </View>
              </TouchableHighlight>
          </View>
        
      </View>
    );
  };
};
