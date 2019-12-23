import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import Aux from '../../HOC/Auxiliary';

const Booked = props => {

    const {
        container,
        imageContainer,
        imageStyle
    } = Styles;

    const {
        trips
    } = props;

    return (
        <View style={container}>
            {!trips ?
                <Aux>
                    <View style={imageContainer}>
                        <Image style={imageStyle} source={require('../../../Assets/Icons/trips.png')} />
                    </View>
                    <Text>
                        No trips yet
                    </Text>
                </Aux>
                :
                null}
        </View>
    )
};

const Styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#eee',
        justifyContent: 'center',
        alignItems: 'center'
    },


    imageContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#ddd',
        justifyContent: 'center',
        alignItems: 'center'
    },

    imageStyle: {
        width: '100%',
        height: '100%',
        opacity: 0.5
    }
});

export default Booked;