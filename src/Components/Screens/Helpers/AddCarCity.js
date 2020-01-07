import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, StatusBar, Platform, ScrollView, Keyboard, Dimensions, Button } from 'react-native';
import constants from '../../../constants';
import ExtraDimensions from 'react-native-extra-dimensions-android';
import Select from 'react-native-picker-select';
import CustomButton from './CustomButton';

const height = Platform.OS === 'android' ? (ExtraDimensions.getSoftMenuBarHeight() !== 0 ? ExtraDimensions.getRealWindowHeight() - ExtraDimensions.getStatusBarHeight() - ExtraDimensions.getSoftMenuBarHeight() : Dimensions.get('window').height - StatusBar.currentHeight) : Dimensions.get('window').height;

class AddCarCity extends React.Component {

    componentDidMount() {
        this.showListener = Keyboard.addListener('keyboardDidShow', () => this.scrollRef.scrollTo({ y: 100, animated: true }));
        this.hideListener = Keyboard.addListener('keyboardDidHide', () => this.scrollRef.scrollTo({ y: 0, animated: true }));
    }
    componentWillUnmount() {
        this.showListener.remove();
        this.hideListener.remove();
    }
    scrollRef = React.createRef();

    render() {
        const {
            outerContainer,
            mainContainer,
            imageContainer,
            textContainer,
            guideText,
            buttonsContainer,
            buttonStyle,
            selectStyle,
            buttonStyleDisabled
        } = Styles;

        const {
            nextPage,
            prevPage,
            value,
            onChangeValue,
            cities,
            navigation,
            location
        } = this.props;

        console.log(cities);
        const items = cities.map(el => ({ value: el.id, label: el.title }));

        return (
            <ScrollView
                ref={(ref) => { this.scrollRef = ref; }}
                scrollEnabled={false}
                showsVerticalScrollIndicator={false}>
                <View style={outerContainer}>
                    <View style={mainContainer}>
                        <View style={imageContainer}>
                            <Image
                                resizeMode='cover'
                                style={{ width: '100%', height: '100%' }}
                                source={require('../../../Assets/AddCarLogos/city.jpg')} />
                        </View>
                        <View style={textContainer}>
                            <Text style={guideText}>
                                Locate your car
                            </Text>
                            <Text>
                                Select a city in order to help us locate your car
                            </Text>
                            <View
                                style={selectStyle}>
                                <Select
                                    value={value}
                                    items={items}
                                    onValueChange={onChangeValue} />
                            </View>
                            {value ? <CustomButton
                                onPress={() => navigation.navigate('PickCarLocation', { city: JSON.stringify(cities.find(el => el.id === value)) })}
                                black>
                                Select location on map
                                 </CustomButton>
                                : null}
                        </View>
                        <View style={buttonsContainer}>
                            <TouchableOpacity
                                onPress={() => prevPage()}
                                activeOpacity={0.9}
                                style={buttonStyle}>
                                <Image
                                    resizeMode='cover'
                                    style={{ width: '50%', height: '50%' }}
                                    source={require('../../../Assets/AddCarLogos/prev.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => nextPage()}
                                activeOpacity={0.9}
                                disabled={!value && !location}
                                style={value && location ? buttonStyle : buttonStyleDisabled}>
                                <Image
                                    resizeMode='cover'
                                    style={{ width: '50%', height: '50%' }}
                                    source={require('../../../Assets/AddCarLogos/next.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                {Platform.OS === 'ios' ? <View style={{ height: 100 }}></View> : null}
            </ScrollView>
        )
    }
}

const Styles = StyleSheet.create({
    outerContainer: {
        backgroundColor: '#fff',
        padding: 10
    },

    mainContainer: {
        width: '100%',
        height: height - constants.headerHeight - 20,
        backgroundColor: '#fff',
        elevation: 5,
        borderRadius: 10,
        shadowColor: '#000',
        shadowRadius: 2,
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 0 }
    },

    imageContainer: {
        borderTopEndRadius: 10,
        borderTopStartRadius: 10,
        overflow: 'hidden',
        flex: 1,
    },

    textContainer: {
        flex: 1,
        margin: 20,
    },

    guideText: {
        fontSize: 22,
        width: '100%',
        textAlign: 'center',
        marginBottom: 20,
    },

    buttonsContainer: {
        width: '100%',
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },

    buttonStyle: {
        width: 60,
        height: 60,
        borderRadius: 40,
        elevation: 2,
        backgroundColor: '#222',
        justifyContent: 'center',
        alignItems: 'center'
    },

    selectStyle: {
        marginTop: 20,
        padding: 5,
        borderWidth: 2,
        borderRadius: 3,
        borderColor: '#000'
    },

    selectMapbutton: {
        marginTop: 20,
        borderWidth: 2,
        borderRadius: 3,
        borderColor: '#000'
    },


    buttonStyleDisabled: {
        width: 60,
        height: 60,
        borderRadius: 40,
        elevation: 2,
        backgroundColor: '#999',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default AddCarCity;