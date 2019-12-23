import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import ImagePicker from 'react-native-image-picker';


class DocViewer extends React.Component {

    state = {
        imageSource: require('../../../Assets/Icons/license.png'),
        uploading: false
    }

    componentDidMount() {
        const {
            url
        } = this.props;
        if (url && url !== 'http://ejaroo.com') {
            this.setState({ imageSource: url });
        }
    }

    showImagePicker = () => {
        const {
            setUserDocument,
            docName,
            reference
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
                    const originalSource = this.state.imageSource;

                    this.setState({
                        imageSource: source,
                        uploading: true
                    });

                    const callbackSuccess = () => {
                        reference[docName] = response.uri
                        this.setState({ uploading: false, imageSource: source })
                    }
                    const callbackFailure = () => {
                        this.setState({ uploading: false, imageSource: originalSource })
                    }

                    setUserDocument(response, docName, callbackSuccess, callbackFailure);
                }
            });
    }



    render() {
        const {
            container,
            textContainer,
            imageContainer,
            textStyle,
            imageStyle,
            modal,
            varificationText,
            varificationContainer,
            editStyle,
            varifiedStyle,
            varifiedTextContainer,
            uploadButtonContainer,
            uploadButtonText
        } = Styles;

        const {
            title,
            url,
            varified
        } = this.props;

        console.log('image source is ', url);

        return (
            <View style={{ ...container, height: varified ? 400 : 300 }}>
                <View style={textContainer}>
                    <Text style={textStyle}>
                        {title}
                    </Text>
                </View>
                <View style={imageContainer}>
                    <Image
                        resizeMode='contain'
                        style={imageStyle}
                        source={this.state.imageSource} />
                    {url && !varified ?
                        <View style={modal}>
                            <Text style={varificationText}>
                                {'This document is being varified by admin.'}
                                {'\nYou will be able to use ejaroo when all of your documents are varified'}
                            </Text>
                        </View>
                        :
                        null}
                    {!url ?
                        <View style={modal}>
                            <TouchableOpacity
                                onPress={this.showImagePicker}
                                activeOpacity={0.8} style={{ width: '90%' }}>
                                <View style={uploadButtonContainer}>
                                    <Text style={uploadButtonText}>Uplaod document</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        :
                        null
                    }
                    {this.state.uploading ?
                        <View style={modal}>
                            <ActivityIndicator size='small' />
                        </View>
                        :
                        null
                    }
                </View>
                {varified ?
                    <View style={varificationContainer}>
                        <TouchableOpacity>
                            <Text style={editStyle}>
                                Edit image
                    </Text>
                        </TouchableOpacity>
                        <View style={varifiedTextContainer}>
                            <Text style={varifiedStyle}>
                                Varified
                        </Text>
                            <Image
                                resizeMode='contain'
                                style={{ height: 18, width: 18 }}
                                source={require('../../../Assets/Icons/ok.png')} />
                        </View>
                    </View>
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
        marginBottom: 20
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

    imageContainer: {
        flex: 4,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    imageStyle: {
        height: '100%'
    },

    modal: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        top: 0,
        backgroundColor: '#0005',
        justifyContent: 'center',
        alignItems: 'center',
    },

    varificationText: {
        color: '#fff',
        padding: 10,
        margin: 10,
        backgroundColor: '#c2185b',
        textAlign: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#fff',
        fontSize: 15,
        overflow: 'hidden'
    },

    varificationContainer: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },

    editStyle: {
        color: '#7986cb',
        fontSize: 14,
        borderBottomColor: '#7986cb',
        borderBottomWidth: 1
    },

    varifiedStyle: {
        fontSize: 16,
        color: '#26a69a',
        paddingRight: 10
    },

    varifiedTextContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 20
    },

    uploadButtonContainer: {
        padding: 10,
        backgroundColor: 'red',
        borderRadius: 5,
        width: '100%'
    },

    uploadButtonText: {
        color: '#fff',
        width: '100%',
        textAlign: 'center',
        fontSize: 20
    }
});

export default DocViewer;