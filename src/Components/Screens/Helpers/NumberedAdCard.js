import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AdCard from './AdCars';

const NumberedAdCard = props => {

    const {
        container,
        left,
        rigth,
        numberContainer,
        numStyle
    } = Styles;

    const {
        number,
        title,
        children
    } = props;

    return (
        <View style={container}>
            <View style={left}>
                <View style={numberContainer}>
                    <Text style={numStyle}>{number}</Text>
                </View>
            </View>
            <View style={rigth}>
                <AdCard left title={title}>
                    {children}
                </AdCard>
            </View>
        </View>
    )
};

const Styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row'
    },

    left: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingRight: 10
    },

    rigth: {
        flex: 3,
        alignItems: 'flex-start',
        paddingLeft: 10
    },

    numberContainer: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderColor: '#fff',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    numStyle: {
        color: '#fff',
        fontSize: 20
    }
    
});

export default NumberedAdCard;