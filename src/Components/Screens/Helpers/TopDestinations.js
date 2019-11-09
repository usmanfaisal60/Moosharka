import React from 'react';
import { View, Text, FlatList, ImageBackground, StyleSheet, Dimensions, ActivityIndicator, TouchableOpacity } from 'react-native';

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
        loader,
        navigation,
        setSearchId,
        setSearchKeyWord
    } = props;


    return (
        <View style={container}>
            <Text style={topLocationsText}>
                Top Locations
            </Text>
            <View style={imagesContainer}>
                {topLocations ?
                    <FlatList data={topLocations} renderItem={({ item }) => {
                        return <TouchableOpacity activeOpacity={0.7}
                            onPress={() => {
                                setSearchId(item.id);
                                setSearchKeyWord(item.title);
                                navigation.navigate('SearchResults');
                            }}>
                            <ImageBackground
                                style={imageStyle}
                                resizeMode='cover'
                                source={{ uri: item.banner }} >
                                <View style={imageModal}>
                                    <Text style={{ ...locationText, fontSize: item.title.length > 6 ? 24 : 28 }}>
                                        {item.title}
                                    </Text>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                    }}
                        keyExtractor={item => `${item.id}`}
                        horizontal
                        showsHorizontalScrollIndicator={false} />
                    :
                    !error && loader ? <ActivityIndicator size='large' />
                        :
                        <Text style={{ textAlign: 'center', color: '#999' }}>Hmmm..! It seems like you are not connected to the internet or our server is down</Text>
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
        width: Dimensions.get('window').width,
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
        color: '#fff',
        textAlign: 'center'
    }
});

export default TopDestinations;