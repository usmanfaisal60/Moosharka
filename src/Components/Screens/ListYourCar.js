import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';


class ListYourCar extends React.Component {
    render() {

        const {
            container
        } = Styles;

        return (
            <View style={container}>

            </View>
        )
    }

}

const Styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    }
});

export default ListYourCar;