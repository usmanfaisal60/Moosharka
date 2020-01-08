import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
const SelectField = props => {

    const {
        container
    } = Styles;

    const {
        children,
        options,
        initial,
        setUserProfile,
        keys
    } = props;

    return (
        <View style={container}>
            <Text style={{ color: '#555', fontSize: 16 }}>
                {children}
            </Text>
            <View style={container}>
                <RadioForm
                    radio_props={options}
                    initial={initial}
                    animation={true}
                    buttonSize={10}
                    buttonOuterSize={20}
                    buttonColor='#01579b'
                    selectedButtonColor='#01579b'
                    onPress={(value) => {
                        const object = {};
                        object[keys[0]] = value
                        setUserProfile(object, () => { }, () => { });
                    }} />
            </View>
        </View>
    )
};

const Styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 20
    }
});

export default SelectField;