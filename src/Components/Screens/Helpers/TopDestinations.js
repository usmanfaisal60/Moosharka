import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

const TopDestinations = props => {

    const {
        container,
        topLocationsText,
        imageStyle,
        imagesContainer,
        imageModal,
        locationText
    } = Styles;

    return (
        <View style={container}>
            <Text style={topLocationsText}>
                Top Locations
            </Text>
            <View style={imagesContainer}>
                <ImageBackground
                    style={imageStyle}
                    resizeMode='cover'
                    source={{ uri: 'https://www.ef.com/sitecore/__~/media/efcom/2018/ils/destinations/United-arab-emirates/Dubai/dubai-stage1.jpg' }} >
                    <View style={imageModal}>
                        <Text style={locationText}>
                            Dubai
                        </Text>
                    </View>
                </ImageBackground>
                <ImageBackground
                    style={imageStyle}
                    resizeMode='cover'
                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFJA7bN9nTV2GmCwW9t0Dqq7FLfladBaN7X3hJmW_KbTIIyigMgw&s' }}>
                    <View style={imageModal}>
                        <Text style={locationText}>
                            Ajman
                        </Text>

                    </View>
                </ImageBackground>
            </View>
        </View>
    )
};

const Styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    imagesContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },

    imageStyle: {
        height: 150,
        width: 150,
        overflow: 'hidden',
        borderRadius: 75,
        margin: 10
    },

    topLocationsText: {
        fontSize: 20
    },

    imageModal: {
        backgroundColor: '#0005',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    locationText: {
        fontSize: 28, 
        color: '#fff'
    }
});

export default TopDestinations;