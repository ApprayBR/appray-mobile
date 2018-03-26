import React, { Component } from 'react';
import { ActivityIndicator, View, FlatList, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

export default class PrayerRequestsList extends Component {
    render() {
      const { requests, isLoading, hasErrored, fetchNextPrayerRequestsPageFromAPI } = this.props;
      const { navigate } = this.props.navigation;

      if (isLoading) {
        return (
          <View style={ styles.loaderContainer }>
            <ActivityIndicator />
          </View>
        );
      }

      if (hasErrored) {
        return (
          <View style={ styles.exceptionContainer }>
            <Text>Sorry! An unexpected error has occurred =(</Text>
          </View>
        );
      }

      requests.forEach((request, i) => {
        request.key = i + 1;
      });
      return (
        <FlatList
          style={ styles.container }
          data={ requests }
          onEndReachedThreshold={ 0.9 }  // onEndReached is called when 90% of the visible content has been visualiazed
          onEndReached={ () => fetchNextPrayerRequestsPageFromAPI() }
          renderItem={ ({ item }) =>
            <TouchableOpacity onPress={() => navigate('PeoplePrayerRequestDetail', {'request': item})}>
              <View style={ styles.row }>
                <Image source={{ uri: item.image }}  style={ styles.image } /> 
                <View style={ styles.textsContainer }>
                  <Text style={ styles.title }> { item.type } </Text> 
                  <Text style={ styles.description }> { item.short_description }</Text>
                </View>
              </View>
            </TouchableOpacity>
          }
        />
      );
      
    }
  }
  
  