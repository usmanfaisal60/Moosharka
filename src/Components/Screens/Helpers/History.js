import React from 'react';
import { View, Image, Text, StyleSheet, FlatList, TouchableOpacity, Linking } from 'react-native';
import Aux from '../../HOC/AUX/Aux';

const History = props => {

    const {
        container,
        imageContainer,
        imageStyle,


        outerContainer,
        textContainer,
        carImageContainer,
        callImageContainer,
        callImageTouch,
        titleText,
        normalText
    } = Styles;

    const {
        result
    } = props.data;

    return (
        <View style={container}>
            {!result ?
                <Aux>
                    <View style={imageContainer}>
                        <Image style={imageStyle} source={require('../../../Assets/Icons/trips.png')} />
                    </View>
                    <Text>
                        No trips yet
                    </Text>
                </Aux>
                :
                <FlatList style={{ width: '100%' }}
                    data={result}
                    keyExtractor={el => el.code}
                    renderItem={({ item }) => {
                        console.log(item);

                        const {
                            first_name,
                            total,
                            status,
                            start_date,
                            end_date,
                            phone
                        } = item;

                        return (
                            <Aux>
                                <View style={outerContainer}>
                                    <View style={textContainer}>
                                        <Text style={titleText}>
                                            {first_name}'s trip
                                    </Text>
                                        <Text style={normalText}>
                                            <Text>{new Date(start_date).toLocaleDateString()} - {new Date(end_date).toLocaleDateString()}</Text>
                                        </Text>
                                        <Text style={normalText}>
                                            <Text style={titleText}>Totla payment</Text>: {total}
                                        </Text>
                                        <Text style={normalText}>
                                            <Text style={titleText}>Status</Text>: {status}
                                        </Text>
                                    </View>
                                    <View style={callImageContainer}>
                                        <TouchableOpacity
                                            onPress={() => Linking.openURL(`tel: ${phone}`)}
                                            style={callImageTouch}>
                                            <Image
                                                resizeMode='contain'
                                                style={{ width: '100%' }}
                                                source={require('../../../Assets/Icons/phone.png')} />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={carImageContainer}>

                                    </View>
                                </View>
                                <View
                                    style={{
                                        borderBottomWidth: 1,
                                        width: '80%',
                                        alignSelf: 'center',
                                        borderBottomColor: '#aaa'
                                    }}></View>
                            </Aux>
                        )
                    }} />
            }
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
    },

    outerContainer: {
        width: '100%',
        height: 120,
        justifyContent: 'center',
        flexDirection: 'row'
    },

    textContainer: {
        flex: 10,
        height: '100%',
        justifyContent: 'center',
        paddingLeft: 15
    },

    carImageContainer: {
        flex: 5,
        height: '100%',
    },

    callImageContainer: {
        flex: 2,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    titleText: {
        fontSize: 16,
        fontWeight: 'bold',
    },

    normalText: {
        paddingLeft: 15
    },

    callImageTouch: {
        width: '100%'
    }
});

const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
]

export default History;