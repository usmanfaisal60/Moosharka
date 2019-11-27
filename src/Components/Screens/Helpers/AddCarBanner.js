import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-picker';


class AddCraBanner extends React.Component {

    state = {
        avatarSource: null
    }

    showImagePicker() {
        ImagePicker.showImagePicker({
            title: 'Select a photo',
            storageOptions: {
                skipBackup: true,
                path: 'images'
            }
        },
            response => {

                if (response.didCancel) {
                    console.log('User cancelled image picker');
                } else if (response.error) {
                    console.log('ImagePicker Error: ', response.error);
                } else if (response.customButton) {
                    console.log('User tapped custom button: ', response.customButton);
                } else {
                    console.log(response);
                    const source = { uri: response.uri }
                    this.setState({
                        avatarSource: source,
                    });
                }
            });
    }

    render() {
        const {
            container,
            imageStyle,
            addIconStyle,
            addIconContainer,
            touchContainer
        } = Styles;

        return (

            <View style={container}>
                <Image
                    source={this.state.avatarSource ? this.state.avatarSource : require('../../../Assets/Icons/pick-car.jpg')}
                    style={imageStyle}
                    resizeMode='cover' />
                {!this.state.source ?
                    <TouchableOpacity
                        activeOpacity={0.6}
                        onPress={this.showImagePicker.bind(this)}
                        style={touchContainer}>
                        <View style={addIconContainer}>
                            <Image
                                source={require('../../../Assets/Icons/plus.png')}
                                style={addIconStyle}
                                resizeMode='cover' />
                        </View>
                    </TouchableOpacity>
                    :
                    null
                }
            </View>
        )
    }
}

const Styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 200,
    },

    imageStyle: {
        height: '100%',
        width: '100%'
    },

    addIconStyle: {
        width: '50%',
        height: '50%'
    },

    addIconContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#43a047',
        justifyContent: 'center',
        alignItems: 'center'
    },

    touchContainer: {
        bottom: 0,
        right: 0,
        margin: 20,
        position: 'absolute',
    }
});

export default AddCraBanner;