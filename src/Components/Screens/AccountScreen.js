import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import CustomHeader from './Helpers/CustomHeader';
import DocViewer from './Helpers/DocViewer';
import constants from '../../constants';
import { connect } from 'react-redux';
import EditableTextField from './Helpers/EditableTextField';
import ImagePicker from 'react-native-image-picker';


class AccountScreen extends React.Component {

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
                    const source = { uri: response.uri };

                    this.setState({
                        avatarSource: source,
                    });
                }
            });
    }

    render() {

        if (this.state.avatarSource) console.log(this.state.avatarSource);

        const {
            container,
            scrollerContainer,
            profileImageContainer,
            imageStyle,
            imageContainerStyle,
            addImageButton,
            textContainer,
            fieldContainer,
            docsContainer,
        } = Styles;

        const {
            navigation,
            userProfile
        } = this.props;

        const {
            profileImage,
            username,
            phone,
            license,
            cnic,
            iqama,
            docs
        } = userProfile


        const source = this.state.avatarSource ? this.state.avatarSource : profileImage ? { uri: profileImage } : require('../../Assets/Icons/profileImage.png');

        return (
            <View style={container}>
                <CustomHeader backbutton onPressLeft={navigation.goBack}>
                    Your Account
                </CustomHeader>
                <View style={scrollerContainer}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={profileImageContainer}>
                            <View style={imageContainerStyle}>
                                <Image style={imageStyle} source={source} />
                                <TouchableOpacity
                                    onPress={this.showImagePicker.bind(this)}
                                    activeOpacity={0.75}
                                    style={addImageButton}>
                                    <Image style={{ width: '50%', height: '50%' }}
                                        resizeMode='contain'
                                        source={profileImage ? require('../../Assets/Icons/editImage.png') : require('../../Assets/Icons/plus.png')} />
                                </TouchableOpacity>

                            </View>
                            <View style={textContainer}>
                                <EditableTextField icon='username'>
                                    {username}
                                </EditableTextField>
                            </View>
                        </View>

                        <View style={fieldContainer}>
                            <EditableTextField number icon='phone' title='Phone number'>
                                {phone}
                            </EditableTextField>
                        </View>
                        <View style={fieldContainer}>
                            <EditableTextField icon='license' title='License number'>
                                {license}
                            </EditableTextField>
                        </View>
                        <View style={fieldContainer}>
                            <EditableTextField number icon='cnic' title='ID/CNIC'>
                                {cnic}
                            </EditableTextField>
                        </View>
                        <View style={fieldContainer}>
                            <EditableTextField number icon='iqama' title='Iqama number'>
                                {iqama}
                            </EditableTextField>
                        </View>
                        <View style={docsContainer}>
                            {docs.map((el, i) => <DocViewer key={i} data={el} />)}
                        </View>
                        <View style={{ height: 20 }}></View>
                    </ScrollView>
                </View>
            </View>
        )
    }

}


const imageSize = 150;
const addImageButtonSize = 40;

const Styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%'
    },

    scrollerContainer: {
        width: '100%',
        flex: 1,
        paddingTop: constants.headerHeight
    },

    profileImageContainer: {
        height: 250,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eee',
        borderBottomColor: '#ddd',
        borderBottomWidth: 2
    },

    imageContainerStyle: {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2,
        alignItems: 'center',
        justifyContent: 'center'
    },

    imageStyle: {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2,
    },

    addImageButton: {
        width: addImageButtonSize,
        height: addImageButtonSize,
        borderRadius: addImageButtonSize / 2,
        backgroundColor: 'green',
        position: 'absolute',
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },

    textContainer: {
        width: '80%',
        height: 70,
        justifyContent: 'center',
    },

    fieldContainer: {
        width: '100%',
        height: 120,
        justifyContent: 'center',
    },

    docsContainer: {
        width: '100%'
    },

});

const mapStateToProps = state => {
    return {
        ...state.profile,
        ...state.loader
    }
}

export default connect(mapStateToProps)(AccountScreen);