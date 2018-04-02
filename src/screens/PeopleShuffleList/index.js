import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Carousel from 'react-native-snap-carousel';

import styles from './styles';
import { sliderWidth, itemWidth } from 'appray/src/components/presentational/SliderEntry/styles';
import { logout } from 'appray/src/actions/login';
import { getUsersShuffleListFromAPI } from 'appray/src/actions/user';
import UserPrayerRequestsList from 'appray/src/components/presentational/UserPrayerRequestsList';
import SliderEntry from 'appray/src/components/presentational/SliderEntry';

class PeopleShuffleListScreen extends Component {
    componentDidMount() {
        this.props.getUsersShuffleListFromAPI();
    };

    _renderItem ({item, index}) {
        const { navigation } = this.props;

        return <SliderEntry data={ item } navigation={ navigation } />;
    }

    _renderItemWithParallax ({item, index}, parallaxProps) {
        return (
            <SliderEntry
              data={item}
              parallax={true}
              parallaxProps={parallaxProps}
            />
        );
    }

    _renderCarrousel () {
        const { usersShuffleList } = this.props;

        return (
            <View style={ [styles.container, styles.containerDark] }>
                <Text style={[styles.title, ]}>{ 'Que tal orar por alguém que você não conhece?' }</Text>
                <Carousel
                  data={ usersShuffleList }
                  layout={'default'}
                  renderItem={this._renderItem.bind(this)}
                  sliderWidth={sliderWidth}
                  itemWidth={itemWidth}
                  inactiveSlideScale={0.95}
                  inactiveSlideOpacity={1}
                  enableMomentum={true}
                  activeSlideAlignment={'start'}
                  containerCustomStyle={styles.slider}
                  contentContainerCustomStyle={styles.sliderContentContainer}
                  activeAnimationType={'spring'}
                  activeAnimationOptions={{
                      friction: 4,
                      tension: 40
                  }}
                />
            </View>
        );
    };

    render() {
        return (
            <SafeAreaView style={styles.safeArea}>
                { this._renderCarrousel() }
            </SafeAreaView>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        usersShuffleList: state.user.usersShuffleList,
    };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getUsersShuffleListFromAPI, }, dispatch);
};
  
export default connect(mapStateToProps, mapDispatchToProps)(PeopleShuffleListScreen);