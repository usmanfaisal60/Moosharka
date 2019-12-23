import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const SubmitSection = props => {

    const {
        carName,
        carManufacturingYear,
        carModel,
        carLocation,
        carCity,
        carPrice,
        maxPeople,
        carImage,
        galleryImages,
        submitCar,
        navigation,
        showLoader,
        hideLoader
    } = props;

    const {
        container,
        buttonStyle,
        buttonText
    } = Styles;

    const callbackSuccess = () => {
        hideLoader();
        Alert.alert(
            'Car submitted successfully',
            'Thank you for submitting the car. You shall recieve an email once your car is approved by our local authority',
            [
                { text: 'OK', onPress: () => navigation.popToTop() }
            ]
        );
    }

    const callbackFailure = () => {
        hideLoader();
        Alert.alert(
            'Something went wrong',
            'We appologize for the inconvenience. A report has been submitted to our admin about the error. Please try again. If the error continues to appear, contact the system administrator',
            [
                { text: 'OK' }
            ]
        )
    }

    return (
        <View style={container}>
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => {
                    if (carName, carManufacturingYear, carModel, carLocation, carCity, carPrice, maxPeople, carImage) {
                        showLoader();
                        submitCar(carName, carManufacturingYear, carCity, carLocation.latitude, carLocation.longitude, carPrice, maxPeople, carImage, null, callbackSuccess, callbackFailure);
                    }
                    else Alert.alert(
                        'Empty fields',
                        'Kindly fill all of the information regarding the car before submitting it',
                        [
                            { text: 'OK' }
                        ]
                    )
                }}
                style={container}>
                <View style={buttonStyle}>
                    <Text style={buttonText}>Submit Car</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
};

const Styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 120,
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonStyle: {
        width: '70%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3
    },

    buttonText: {
        fontSize: 18
    }
});

export default SubmitSection;