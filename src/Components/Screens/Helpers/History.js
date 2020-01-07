import React from 'react';
import { View, Image, Text, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity, Linking } from 'react-native';
import Aux from '../../HOC/Auxiliary';
import { connect } from 'react-redux';
import * as actions from '../../../Redux/Actions';


class History extends React.Component {

    componentDidMount() {
        const {
            fetchTripsHistory
        } = this.props;

        fetchTripsHistory();
    }

    render() {

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
            history,
            historyLoader
        } = this.props;
        const loadingImageSize = 60;


        return (
            <View style={container}>
                {!historyLoader && history && history.result.length > 0 ?
                    <FlatList style={{ width: '100%' }}
                        data={history.result}
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
                            );
                        }} />

                    :
                    null
                }
                {historyLoader ?
                    <Image
                        style={{ width: loadingImageSize, height: loadingImageSize }}
                        source={require('../../../Assets/loading.gif')} />
                    :
                    null
                }
                {!historyLoader && (!history || history.result.length === 0) ?
                    <Aux>
                        <View style={imageContainer}>
                            <Image style={imageStyle} source={require('../../../Assets/Icons/trips.png')} />
                        </View>
                        <Text>
                            Your previous trips will appear here
                        </Text>
                    </Aux>
                    :
                    null
                }
            </View>
        );
    }
}

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

const mapStateToProps = state => {
    return {
        ...state.loader,
        ...state.trips
    }
}

export default connect(mapStateToProps, actions)(History);