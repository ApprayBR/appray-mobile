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

class SignupEmailScreen extends Component {
  static navigationOptions = {
  };

  render() {
    const { navigation } = this.props;

    return (
      <View style={ styles.container }>
        <View style={ styles.header }>
          <TouchableHighlight
            underlayColor='transparent'
            onPress={ () => navigation.navigate('SignupInit') }>
              <Ionicons name='ios-arrow-back' size={ 24 } style={ styles.arrowBack } />
          </TouchableHighlight>
        </View>
        <View style={ styles.body }>
          <View style={ styles.topMessageContainer }>
            <Image
              style={ styles.topMessageImage }
              source={ require('appray/src/resources/images/movies_icon_small.png') }
            />
            <Text style={ styles.topMessageText }>Create your account and know more about Appray!</Text>
          </View>
          <View style={ styles.textInputContainer }>
            <TextInput 
              style={ styles.textInput } 
              placeholder="Email address" 
              />
            <TextInput 
              style={ [styles.textInput, styles.password] }
              placeholder="Password"
              />
            <TextInput 
              style={ styles.textInput } 
              placeholder="Full Name" 
              />
            <TextInput 
              style={ styles.textInput }
              placeholder="Gender"
              />
          </View>
          <View style={ styles.createAccountButtonContainer }>
            <TouchableHighlight 
              underlayColor={ colors.secondary }
              style={ styles.createAccountButton }
              onPress={ () => navigation.navigate('EmailSignup') }>
              <View style={ styles.touchableAccount }>
                <Image
                  style={ styles.createAccountImage }
                  source={ require('appray/src/resources/images/create_account_icon.png') }
                />
                <Text style={ styles.createAccountButtonText }>CREATE ACCOUNT</Text>  
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

export default connect(mapStateToProps, mapDispatchToProps)(SignupEmailScreen);
