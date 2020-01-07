import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, StatusBar, TextInput, Platform, ScrollView, Dimensions, Keyboard } from 'react-native';
import constants from '../../../constants';
import ExtraDimensions from 'react-native-extra-dimensions-android';
import CustomButton from './CustomButton';
import ImagePicker from 'react-native-image-picker';


const height = Platform.OS === 'android' ? (ExtraDimensions.getSoftMenuBarHeight() !== 0 ? ExtraDimensions.getRealWindowHeight() - ExtraDimensions.getStatusBarHeight() - ExtraDimensions.getSoftMenuBarHeight() : Dimensions.get('window').height - StatusBar.currentHeight) : Dimensions.get('window').height;

class AddCarGalleryImages extends React.Component {

    state = {
        avatarSource: null
    }

    componentDidMount() {
        this.showListener = Keyboard.addListener('keyboardDidShow', () => this.scrollRef.scrollTo({ y: 100, animated: true }));
        this.hideListener = Keyboard.addListener('keyboardDidHide', () => this.scrollRef.scrollTo({ y: 0, animated: true }));
        if (this.props.value) this.setState({ avatarSource: { uri: this.props.value.uri } });
    }
    componentWillUnmount() {
        this.showListener.remove();
        this.hideListener.remove();
    }
    scrollRef = React.createRef();

    showImagePicker = () => {
        const {
            onPick,
            value
        } = this.props;

        ImagePicker.showImagePicker({
            title: 'Select a photo',
            storageOptions: {
                skipBackup: true,
                path: 'images'
            },
            quality: 0.5
        },
            response => {

                if (response.didCancel) {
                    console.log('User cancelled image picker');
                } else if (response.error) {
                    console.log('ImagePicker Error: ', response.error);
                } else if (response.customButton) {
                    console.log('User tapped custom button: ', response.customButton);
                } else {
                    const source = { uri: response.uri };

                    this.setState({
                        avatarSource: source,
                    });

                    if (!value) onPick([response]);
                    else onPick([...value, response])
                }
            });
    }
    render() {
        const {
            outerContainer,
            mainContainer,
            imageContainer,
            textContainer,
            guideText,
            buttonsContainer,
            buttonStyle,
            imageStyle,
            imagesContainer,
            buttonStyleDisabled
        } = Styles;

        const {
            nextPage,
            prevPage,
            value
        } = this.props;

        console.log(value);

        return (
            <ScrollView
                ref={(ref) => { this.scrollRef = ref; }}
                scrollEnabled={false}
                showsVerticalScrollIndicator={false}>
                <View style={outerContainer}>
                    <View style={mainContainer}>
                        <View style={imageContainer}>
                            <ScrollView horizontal>
                                <View style={imagesContainer}>
                                    {value ? value.length !== 0 ?
                                        value.map((el, i) => (
                                            <TouchableOpacity
                                                key={i}
                                                activeOpacity={0.5}
                                                style={{ ...imageStyle, margin: 10 }}>
                                                <Image
                                                    resizeMode='cover'
                                                    style={imageStyle}
                                                    source={el} />
                                            </TouchableOpacity>
                                        ))
                                        :
                                        null : null}
                                    <TouchableOpacity
                                        onPress={this.showImagePicker.bind(this)}
                                        activeOpacity={0.5}
                                        style={{ ...imageStyle, margin: 10 }}>
                                        <Image
                                            resizeMode='cover'
                                            style={imageStyle}
                                            source={require('../../../Assets/AddCarLogos/add-image.png')} />
                                    </TouchableOpacity>
                                </View>
                            </ScrollView>
                        </View>
                        <View style={textContainer}>
                            <Text style={guideText}>
                                Add more images
                            </Text>
                            <Text>
                                Make a gallery of your car images. Take photos from front and back and also make sure you include a photo that contains the number plate
                            </Text>
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
                                disabled={!value}
                                style={value ? buttonStyle : buttonStyleDisabled}>
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
const imageSize = 120;
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

    textInputStyle: {
        marginTop: 20,
        padding: 5,
        borderWidth: 2,
        borderRadius: 3,
        borderColor: '#000'
    },

    imageStyle: {
        width: imageSize,
        height: imageSize,
    },
    imagesContainer: {
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center'
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

export default AddCarGalleryImages;