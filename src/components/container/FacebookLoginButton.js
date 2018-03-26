import React, { Component } from 'react';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { loginWithFacebook } from 'appray/src/actions/login';

class FacebookLoginButton extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
    }
    
    render () {
        const { navigation } = this.props;

        return (
            <LoginButton
                publishPermissions ={ ["publish_actions"] }
                onLoginFinished = {
                    (error, result) => {
                        if (error) {
                            console.warn("Login failed with error: " + result.error);
                        } else if (result.isCancelled) {
                            console.log("Login was cancelled");
                        } else {
                            this.props.loginWithFacebook(navigation);
                        }
                    }
                }
                onLogoutFinished={ () => alert("User logged out") }
            />
        );
    }
};

const mapStateToProps = (state) => {
    return {

    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ loginWithFacebook, }, dispatch);
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(FacebookLoginButton);