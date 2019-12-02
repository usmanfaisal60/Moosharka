import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class AddDoc extends React.Component {
    render() {

        const {
            container,
            textStyle,
            textContainer
        } = Styles;

        const {
            title
        } = this.props;

        return (
            <View style={container}>
                <View style={textContainer}>
                    <Text style={textStyle}>{title}</Text>
                </View>
            </View>
        )
    }
}

const Styles = StyleSheet.create({
    container: {
        width: '100%'
    },

    textContainer: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        paddingLeft: 10
    },

    textStyle: {
        color: '#777',
        fontSize: 18
    },
});

export default AddDoc;