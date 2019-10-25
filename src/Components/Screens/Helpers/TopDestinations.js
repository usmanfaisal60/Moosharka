import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const TopDestinations = props => {

    const {
        container,
        topLocationsText,
        imageStyle,
        imagesContainer,
        imageModal,
        locationText
    } = Styles;

    const {
        topLocations,
        error,
        loader
    } = props;

    return (
        <View style={container}>
            <Text style={topLocationsText}>
                Top Locations
            </Text>
            <View style={imagesContainer}>
                {topLocations ?
                    <FlatList data={topLocations} renderItem={({ item }) => (
                        <ImageBackground
                            style={imageStyle}
                            resizeMode='cover'
                            source={{ uri: item.bgUrl }} >
                            <View style={imageModal}>
                                <Text style={locationText}>
                                    {item.name}
                                </Text>
                            </View>
                        </ImageBackground>)}
                        keyExtractor={item => `${item.id}`}
                        horizontal
                        showsHorizontalScrollIndicator={false} />
                    :
                    !error && loader ? <ActivityIndicator size='large' />
                    : 
                    <Text style={{textAlign :'center', color: '#999'}}>Hmmm..! It seems like you are not connected to the internet or our server is down</Text>
                }
            </View>
        </View>
    )
};

const imageSize = (Dimensions.get('window').width) * 0.35

const Styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    imagesContainer: {
        width: '100%',
        height: imageSize + 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },

    imageStyle: {
        height: imageSize,
        width: imageSize,
        overflow: 'hidden',
        borderRadius: imageSize / 2,
        marginHorizontal: 10
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