import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native';

const UserMightLike = props => {

    const {
        container,
        imageStyle,
        descriptionContainer,
        priceText,
        descriptionText,
        raitngAndTrips
    } = Styles;

    const CarDetail = {
        price: '€30/day',
        name: 'Mercedes benz s class',
        rating: 4,
        trips: 3
    }

    const {
        price,
        name,
        rating,
        trips
    } = CarDetail

    return (
        <View style={container}>
            <Text style={{ color: '#999' }}>
                You might like
            </Text>
            <ImageBackground
                style={imageStyle}
                source={require('../../../Assets/Images/mercedes-benz-s-class.jpeg')}>
                <View style={descriptionContainer}>
                    <Text style={priceText}>{price}</Text>
                </View>
            </ImageBackground>
            <Text style={descriptionText}>
                {name}
            </Text>
            <View style={raitngAndTrips}>
                {showRating(rating)}
                <Text style={{ paddingHorizontal:10 }}>{trips} trips</Text>
            </View>
        </View>
    )
}

const showRating = rating => {
    const toReturn = [];
    for (let i = 0; i < rating; i++) {
        toReturn.push(<Image key={i} source={require('../../../Assets/Icons/star.png')} style={Styles.starStyle} />)
    }

    return toReturn;
}

const Styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 20,
        marginTop: 20
    },

    imageStyle: {
        width: '100%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        overflow: 'hidden',
        marginVertical: 5,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },

    descriptionContainer: {
        height: '30%',
        width: '30%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    priceText: {
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 3
    },

    descriptionText: {
        fontSize: 17,
        paddingVertical: 10
    },

    starStyle: {
        width: 15,
        height: 15
    },

    raitngAndTrips: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});


export default UserMightLike;