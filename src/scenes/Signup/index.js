import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import { colors, fonts, metrics } from 'appray/src/styles';
import { setLogin, setPassword } from 'appray/src/actions/login';
import FacebookLoginButton from 'appray/src/components/container/FacebookLoginButton';

class SignupScreen extends Component {
  static navigationOptions = {
  };

  render() {
    const { navigation } = this.props;

    return (
      <View style={ styles.container }>
        <View style={ styles.header }>
          <TouchableHighlight
            underlayColor='transparent'
            onPress={ () => navigation.navigate('Init') }>
              <Ionicons name='ios-arrow-back' size={ 24 } style={ styles.arrowBack } />
          </TouchableHighlight>
        </View>
        <View style={ styles.body }>
          <View style={ styles.topMessageContainer }>
            <Image
              style={ styles.topMessageImage }
              source={ require('appray/src/resources/images/movies_icon_small.png') }
            />
            <Text style={ styles.topMessageText }>Create your account and pray for others!</Text>
          </View>
          <View style={ styles.facebook }>
            <FacebookLoginButton navigation={ navigation } />
          </View>
          <View style={ styles.middleTextContainer }>
            <Text style={ styles.middleText }>OR</Text>
          </View>
          <View style={ styles.emailButtonContainer }>
            <TouchableHighlight 
              underlayColor={ colors.secondary }
              style={ styles.emailButton }
              onPress={ () => navigation.navigate('SignupEmail') }>
              <View style={ styles.touchableEmail }>
                <Image
                  style={ styles.emailImage }
                  source={ require('appray/src/resources/images/email_icon.png') }
                />
                <Text style={ styles.emailButtonText }>EMAIL ADDRESS</Text>  
              </View>
            </TouchableHighlight >
            <TouchableHighlight
              underlayColor='transparent'
              onPress={ () => navigation.navigate('Login') }>
                <Text style={ styles.loginText }>Already have an account? Log in now</Text>
            </TouchableHighlight>
          </View>
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
  return bindActionCreators({ setLogin, setPassword}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen);