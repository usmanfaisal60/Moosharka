import React from 'react';
import { View, Image, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-picker';


class Gallery extends React.Component {

    showImagePicker() {
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
                    const source = { uri: response.uri }
                    this.setState({
                        avatarSource: source,
                    });
                    if (!this.props.galleryImages) this.props.setCarCredential([response]);
                    else this.props.setCarCredential([...this.props.galleryImages, response])
                }
            });
    }

    render() {
        const {
            container,
            imageStyle,
            textStyle,
            imagesContainer
        } = Styles;

        const {
            galleryImages
        } = this.props;

        return (
            <View style={container}>
                <Text style={textStyle}>Gallery</Text>
                <ScrollView horizontal>
                    <View style={imagesContainer}>
                        {galleryImages ? galleryImages.length !== 0 ?
                            galleryImages.map((el, i) => (
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
        )
    }
}



const imageSize = 120

const Styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 200,
        justifyContent: 'center'
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
    textStyle: {
        paddingLeft: 20,
        color: '#1565c0',
        fontSize: 20
    }
});

export default Gallery;