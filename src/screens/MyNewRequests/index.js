import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, TextInput, View, Image, TouchableOpacity, Picker } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { styles, nav_styles } from './styles';
import { logout } from 'appray/src/actions/login';
import { getCategoriesFromAPI } from 'appray/src/actions/categories';
import UserPrayerRequestsList from 'appray/src/components/presentational/UserPrayerRequestsList';

class MyNewPrayerRequestsScreen extends Component {
    componentDidMount() {
        this.props.getCategoriesFromAPI();
    };

    renderPickerItems() {
        if (this.props.categories) {
            let availableCategories = this.props.categories.map( item => {
                return <Picker.Item key={item.id} value={item.id} label={item.description} />
            });

            return availableCategories
        }
        
        return null;
    };

    render() {
        const { navigation, myUserProfile, myNewPrayerRequest } = this.props;
        const { goBack } = navigation;

        return (
            <View style={ styles.container }>
                <View style={ styles.categoryContainer }> 
                    <Text style={ styles.title }>
                        Categoria:
                    </Text>
                    <View style={ styles.pickerContainer }>
                        <Picker
                            onValueChange={ (itemValue, itemIndex) => alert('Update Redux myNewPrayerRequest.type to ' + itemValue) }
                            selectedValue={ 0 }>
                            
                            { this.renderPickerItems() }

                        </Picker>
                    </View>
                </View>
                
                <View style={ styles.shortContainer }>
                    <Text style={ styles.title }>
                        Resumo (140 caracteres):
                    </Text>
                    <TextInput value={ myNewPrayerRequest.short_description } style={ styles.textInput } />
                </View>
                <View style={ styles.descriptionContainer }>
                    <Text style={ styles.title }>
                        Descrição:
                    </Text>
                    <TextInput multiline={ true } value={ myNewPrayerRequest.description } style={ styles.textInputDescription } />
                </View>

                <View style={ styles.buttonContainer }>
                    <TouchableOpacity onPress={ () => goBack() }>
                        <View style={ [styles.buttonInnerContainer, ] }>
                            <Image
                                style={ styles.buttonImage }
                                source={ require('appray/src/resources/images/paper_plane.png') }
                            />
                            <Text style={styles.buttonText}>Enviar Pedido</Text>
                        </View>
                    </TouchableOpacity>
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
  return bindActionCreators({ getCategoriesFromAPI, }, dispatch);
};
  
export default connect(mapStateToProps, mapDispatchToProps)(MyNewPrayerRequestsScreen);