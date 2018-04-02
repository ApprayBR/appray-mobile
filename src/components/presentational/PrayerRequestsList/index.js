import React, { Component } from 'react';
import { ActivityIndicator, View, FlatList, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';
import { getStaticImageByName } from 'appray/src/utils';
import PrayersCounter from 'appray/src/components/presentational/PrayersCounter';

export default class PrayerRequestsList extends Component {
    render() {
      const { requests, isLoading, hasErrored, fetchNextPrayerRequestsPageFromAPI } = this.props;
      const { navigate } = this.props.navigation;
      const IMAGES = getStaticImageByName();

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
            <Text>Desculpa! Ocorreu um erro =(</Text>
          </View>
        );
      }
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
                  <Text style={ styles.title }> { item.user_name }</Text>
                  <View style={ styles.titleContainer }>
                    <Image
                      style={ styles.requestImage }
                      source={ IMAGES[item.type] }/>
                    <Text style={ styles.typeTitle }> { item.type } </Text> 
                  </View>
                  <Text style={ styles.description }> { item.short_description }</Text>
                  <PrayersCounter prayersCount={ item.prayers_count }  />
                </View>
              </View>
            </TouchableOpacity>
          }
          keyExtractor={(item, index) => index}
        />
      );
      
    }
  }
  
  