import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { ParallaxImage } from 'react-native-snap-carousel';
import styles from './styles';

export default class SliderEntry extends Component {

    static propTypes = {
        data: PropTypes.object.isRequired,
        parallax: PropTypes.bool,
        parallaxProps: PropTypes.object
    };

    get image () {
        const { data: { image }, parallax, parallaxProps } = this.props;

        return parallax ? (
            <ParallaxImage
              source={{ uri: image }}
              containerStyle={[styles.imageContainer, ]}
              style={styles.image}
              parallaxFactor={0.35}
              showSpinner={true}
              spinnerColor={'rgba(0, 0, 0, 0.25)'}
              {...parallaxProps}
            />
        ) : (
            <Image
              source={{ uri: image }}
              style={styles.image}
            />
        );
    }

    render () {
        const { data, navigation } = this.props;

        return (
            <TouchableOpacity
              activeOpacity={1}
              style={styles.slideInnerContainer}
              onPress={ () => navigation ? navigation.navigate('PeopleShuffleDetail', {'user': data, 'navigation': navigation}) : {} }
              >
                <View style={styles.shadow} />
                <View style={[styles.imageContainer, ]}>
                    { this.image }
                    <View style={[styles.radiusMask, ]} />
                </View>
                <View style={[styles.textContainer, ]}>
                    <Text
                        style={[styles.title,]}
                        numberOfLines={2}
                    >
                        { data.full_name.toUpperCase() }
                    </Text>
                    <Text
                      style={[styles.subtitle, ]}
                      numberOfLines={2}
                    >
                        { data.religion }
                    </Text>
                    <Text
                      style={[styles.subtitle, ]}
                      numberOfLines={2}
                    >
                        { data.church }
                    </Text>
                    <Text
                      style={[styles.subtitle, ]}
                      numberOfLines={2}
                    >
                        { data.prayers }
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}