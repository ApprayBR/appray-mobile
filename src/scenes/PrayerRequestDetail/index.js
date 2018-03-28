import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Button, Text, View, Image, Linking, WebView, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import { getStaticImageByName } from 'appray/src/utils';

export default class  PrayerRequestDetailScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Detalhes',
  };

  _markPrayerRequestAsSolved(request) {
    alert('Seu pedido foi solucionado. Todos que oraram por isso serão notificados =)');
  }

  _renderButton(navigate, request) {
    if (this.props.navigation.state.params.isMyProfile) {
      return (
        <View style={ styles.pray }>
            <TouchableOpacity onPress={ () => this._markPrayerRequestAsSolved(request) }>
              <View style={styles.prayingContainer} >
                <View style={styles.prayingTextContainer}>
                  <Text style={styles.prayingText}>Marcar Como Resolvido</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={ () => navigate('MyPrayerRequestRecording', {'request': request}) }>
              <View style={styles.prayingContainer} >
                <View style={styles.prayingTextContainer}>
                  <Text style={styles.prayingText}>Ver Orações Recebidas</Text>
                </View>
              </View>
            </TouchableOpacity>
        </View>
      );
    }

    return (
      <View style={ styles.pray }>
          <TouchableOpacity onPress={ () => navigate('PrayerRequestRecording', {'request': request}) }>
            <View style={styles.prayingContainer} >
              <Image source={ require('appray/src/resources/images/praying-hands.png') } style={styles.prayingImage} />
              <View style={styles.prayingTextContainer}>
                <Text style={styles.prayingText}>Orar Por Isso</Text>
              </View>
            </View>
          </TouchableOpacity>
      </View>
    );
  }

  render() {
    const { navigate } = this.props.navigation;
    const { request } = this.props.navigation.state.params;
    const IMAGES = getStaticImageByName();

    return (
      <View style={ styles.container }>
          
          <View style={ styles.upper }>
            <TouchableOpacity onPress={ () => navigate('PeopleProfile', {'userId': request.user_id}) }>
              <Image source={{ uri: request.image }}  style={styles.image} /> 
            </TouchableOpacity>
            <View style={ styles.textsContainer }>
              <View style={ styles.titleDescription }>
                <View style={ styles.titleContainer }>
                  <Image
                    style={ styles.requestImage }
                    source={ IMAGES[request.type] }/>
                  <Text style={ styles.title }> { request.type } </Text> 
                </View>
                <Text style={ styles.shortDescription }> { request.short_description }</Text>
              </View>
            </View>
          </View>
          
          <View style={ styles.descriptionContainer }>
            <ScrollView>
              <Text style={ styles.description }>{ request.description }</Text>
            </ScrollView>
          </View>

          {this._renderButton(navigate, request)}
        
      </View>
    );
  };
};
