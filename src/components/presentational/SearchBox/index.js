import React, { Component } from 'react';
import { View, TextInput, Image } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import styles from './styles';
import { filterPrayerRequestsByText } from 'appray/src/actions/prayerRequests';

class SearchBox extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('appray/src/resources/images/magnifying_glass.png')} style={styles.image} />
                <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => this.props.filterPrayerRequestsByText(text)}
                />
            </View>
          );
    };
}

const mapStateToProps = (state) => {
    return {};
  };
  
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ filterPrayerRequestsByText: filterPrayerRequestsByText }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
  