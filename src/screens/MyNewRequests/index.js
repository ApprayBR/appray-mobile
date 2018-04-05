import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, Text, TextInput, View, Image, TouchableHighlight, TouchableOpacity, FlatList, Picker } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { styles, nav_styles } from './styles';
import { logout } from 'appray/src/actions/login';
import { getLoggedUserFromAPI } from 'appray/src/actions/user';
import UserPrayerRequestsList from 'appray/src/components/presentational/UserPrayerRequestsList';

class MyNewPrayerRequestsScreen extends Component {
    componentDidMount() {
        // TODO: Get logged user ID from local Storage
        this.props.getLoggedUserFromAPI(1);
    };

    render() {
        const { navigation, logout, getLoggedUserFromAPI, myUserProfile, myNewPrayerRequest, categories } = this.props;
        let availableCategories = categories.map( k => {
            return <Picker.Item key={k} value={k} label={k} />
        });

        return (
            <View style={ styles.container }>
                <View style={ styles.categoryContainer }>
                    <Picker
                        onValueChange={ (itemValue, itemIndex) => alert('Update Redux myNewPrayerRequest.type') }
                        selectedValue={ 0 }>
                        <Picker.Item key="Enfermidade" value="Enfermidade" label="Enfermidade" />
                        <Picker.Item key="Fé" value="Fé" label="Fé" />
                        <Picker.Item key="Financeiro" value="Financeiro" label="Financeiro" />
                        <Picker.Item key="Proteção" value="Proteção" label="Proteção" />
                    </Picker>
                </View>
                <View style={ styles.shortContainer }>
                    <Text>
                        Resumo:
                    </Text>
                    <TextInput value={ myNewPrayerRequest.short_description } style={ styles.textInput } />
                </View>
                <View style={ styles.descriptionContainer }>
                    <Text>
                        Descrição:
                    </Text>
                    <TextInput value={ myNewPrayerRequest.description } style={ styles.textInputDescription } />
                </View>
            </View>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        myUserProfile: state.user.myUserProfile,
        myNewPrayerRequest: state.requests.myNewPrayerRequest,
        categories: state.categories.availableCategories,
    };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ logout, getLoggedUserFromAPI, }, dispatch);
};
  
export default connect(mapStateToProps, mapDispatchToProps)(MyNewPrayerRequestsScreen);