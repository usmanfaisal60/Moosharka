import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Aux from '../../HOC/Auxiliary';

const Filters = props => {

    const {
        container
    } = Styles;

    return (
        <Aux>
            <View style={container}>
                <Text>
                    Apply filters to your search
            </Text>
            </View>
            <View style={{ flex: 1 }}>

            </View>

        </Aux>
    )
};

const Styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 20,
        borderBottomColor: '#ccc',
        borderBottomWidth: 2,
        backgroundColor: '#fff',
        elevation: 3
    }
});

export default Filters;