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

class LoginScreen extends Component {
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
            <Text style={ styles.topMessageText }>Login and pray!</Text>
          </View>
          <View style={ styles.facebook }>
            <FacebookLoginButton navigation={ navigation } />
          </View>
          <View style={ styles.textInputContainer }>
            <TextInput 
              style={[styles.textInput, styles.login]} 
              placeholder="Login" 
              onChangeText={ (text) => this.props.setLogin(text) } />
            <TextInput 
              style={[styles.textInput, styles.password]}
              placeholder="Password"
              onChangeText={ (text) => this.props.setPassword(text) }  />
          </View>
          <View style={ styles.loginButtonContainer }>
            <TouchableHighlight 
              underlayColor={ colors.secondary }
              style={ styles.loginButton }
              onPress={ () => navigation.dispatch({ type: 'Login' }) }>
              <Text style={ styles.loginButtonText }>LOG IN</Text>
            </TouchableHighlight >
            <TouchableHighlight
              underlayColor='transparent'
              onPress={ () => navigation.navigate('Signup') }>
                <Text style={ styles.signupText }> New to Appray? Sign up now. </Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);