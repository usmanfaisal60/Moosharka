import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class SeachResults extends React.Component {

    render() {
        const {
            container
        } = Styles;

        return (
            <View style={container}>

            </View>
        )
    }
};

const Styles = StyleSheet.create({
    container: {
        width: '100%'
    }
});

export default SeachResults;