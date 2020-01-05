import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, Platform, TouchableHighlight, TouchableNativeFeedback } from 'react-native';
import Picker from 'react-native-picker-select';


const AddCarCard = props => {

    const {
        container,
        labelStyle,
        inputStyle,
        iconContainer,
        textContainer,
        imageStyle,
        buttonContainer,
        buttonTextStyle
    } = Styles;

    const {
        label,
        value,
        onChangeText,
        keyboardType,
        icon,
        dropDown,
        onValueChange,
        onPress,
        buttonText,
    } = props;

    return (
        <View style={container}>
            <View style={textContainer}>
                <Text style={labelStyle}>
                    {label}
                </Text>
                {dropDown ?
                    <View style={{ marginLeft: 20 }}>
                        <Picker
                            onValueChange={onValueChange}
                            placeholderTextColor='#222'
                            items={dropDown.map(el => ({ label: el.title, value: el.id }))} />
                    </View>
                    :
                    null
                }
                {onChangeText ?
                    <TextInput
                        style={inputStyle}
                        value={value}
                        keyboardType={keyboardType ? keyboardType : 'default'}
                        onChangeText={onChangeText} />
                    :
                    null
                }
                {onPress ?
                    Platform.OS === 'android' ?
                        <TouchableNativeFeedback onPress={onPress} >
                            <View style={buttonContainer}>
                                <Text style={buttonTextStyle}>
                                    {buttonText}
                                </Text>
                            </View>
                        </TouchableNativeFeedback>
                        :
                        <TouchableHighlight onPress={onPress} style={{ flex: 1 }}>
                            <View style={buttonContainer}>
                                <Text style={buttonTextStyle}>
                                    {buttonText}
                                </Text>
                            </View>
                        </TouchableHighlight>
                    :
                    null
                }
            </View>
        </View>
    )
};

const icons = {
    name: require('../../../Assets/AddCarLogos/name.jpeg'),
    year: require('../../../Assets/AddCarLogos/year.jpg'),
    model: require('../../../Assets/AddCarLogos/model.jpg'),
    city: require('../../../Assets/AddCarLogos/city.png'),
    price: require('../../../Assets/AddCarLogos/price.png'),
    price: require('../../../Assets/AddCarLogos/price.png'),
    max: require('../../../Assets/AddCarLogos/max.jpeg'),
    location: require('../../../Assets/AddCarLogos/location.png'),
}

const imageSize = 50

const Styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 100,
        paddingHorizontal: 10,
        flexDirection: 'row'
    },

    iconContainer: {
        flex: 1,
        justifyContent: 'center',
    },

    textContainer: {
        flex: 1,
        justifyContent: 'center',
    },

    imageStyle: {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2,
        overflow: 'hidden'
    },


    labelStyle: {
        color: '#1565c0',
        fontSize: 18,
        marginLeft: 10
    },

    inputStyle: {
        color: '#222',
        fontSize: 18,
        padding: 0,
        paddingBottom: 2,
        paddingLeft: 5,
        marginTop: 5,
        marginLeft: '7.5%',
        borderBottomColor: '#bbb',
        borderBottomWidth: 1
    },

    buttonContainer: {
        marginVertical: 10,
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ddd',
        borderRadius: 5,
        overflow: 'hidden'
    },

    buttonTextStyle: {
        color: '#555',
        fontSize: 16,
        padding: 10
    }
});

export default AddCarCard;