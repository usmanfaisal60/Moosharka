import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import CustomHeader from './Helpers/CustomHeader';
import constants from '../../constants';
import { connect } from 'react-redux';
import EditableTextField from './Helpers/EditableTextField';


class AccountScreen extends React.Component {

    render() {

        const {
            container,
            scrollerContainer,
            profileImageContainer,
            imageStyle,
            imageContainerStyle,
            addImageButton,
            textContainer
        } = Styles;

        const {
            navigation,
            userProfile
        } = this.props;

        const {
            profileImage,
            username
        } = userProfile

        const source = profileImage ? { uri: profileImage } : require('../../Assets/Icons/profileImage.png');

        return (
            <View style={container}>
                <CustomHeader backbutton onPressLeft={navigation.goBack}>
                    Your Account
                </CustomHeader>
                <View style={scrollerContainer}>
                    <ScrollView >
                        <View style={profileImageContainer}>
                            <View style={imageContainerStyle}>
                                <Image style={imageStyle} source={source} />
                                {!profileImage ?
                                    <TouchableOpacity activeOpacity={0.75} style={addImageButton}>
                                        <Image style={{ width: '50%', height: '50%' }}
                                            resizeMode='contain'
                                            source={require('../../Assets/Icons/plus.png')} />
                                    </TouchableOpacity>
                                    :
                                    null}
                            </View>
                            <View style={textContainer}>
                                <EditableTextField icon='username'>
                                    {username}
                                </EditableTextField>
                            </View>
                        </View>

                        <View style={textContainer}>
                            <EditableTextField icon='username'>
                                {username}
                            </EditableTextField>
                        </View>
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
        width: '70%',
        height: 70,
        justifyContent: 'center',
    }

});

const mapStateToProps = state => {
    return {
        ...state.profile,
        ...state.loader
    }
}

export default connect(mapStateToProps)(AccountScreen);