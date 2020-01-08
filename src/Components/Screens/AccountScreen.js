import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import CustomHeader from './Helpers/CustomHeader';
import DocViewer from './Helpers/DocViewer';
import constants from '../../constants';
import { connect } from 'react-redux';
import EditableTextField from './Helpers/EditableTextField';
import ImagePicker from 'react-native-image-picker';
import FullScreenModal from './Helpers/FullScreenModal';
import { fetchUserProfile, setUserProfile, setProfilePicture, setUserDocument } from '../../Redux/Actions';
import countries from '../../Assets/SampleJson/countries';
import SelectField from './Helpers/SelectField';



class AccountScreen extends React.Component {

    state = {
        avatarSource: null,
        uploading: false
    }

    componentDidMount() {
        const {
            fetchUserProfile
        } = this.props;

        fetchUserProfile();
    }

    showImagePicker() {
        const {
            setProfilePicture,
            avatar
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
                        uploading: true
                    });

                    const callbackSuccess = () => {
                        this.setState({ uploading: false, avatarSource: source })
                    }
                    const callbackFailure = () => {
                        this.setState({ uploading: false, avatarSource: avatar })
                    }
                    setProfilePicture(response, callbackSuccess, callbackFailure);
                }
            });
    }

    renderProfile() {

        const {
            scrollerContainer,
            profileImageContainer,
            imageStyle,
            imageContainerStyle,
            addImageButton,
            textContainer,
            fieldContainer,
            docsContainer,
            notVerifiedContainer,
            notVerifiedIcon,
            notVerifiedText,
            modalStyle
        } = Styles;

        const {
            userProfile,
            setUserProfile,
            setUserDocument
        } = this.props;

        if (userProfile) if (userProfile.status != 'Deactive') {
            const {
                first_name,
                last_name,
                avatar,
                phone,
                email,
                driving_license,
                carLicense_ownership,
                car_maintenance_certificate,
                emirates_id,
                is_driving_license_approved,
                is_car_license_ownership_approved,
                is_car_migration_certificate_approved,
                address,
                address2,
                city,
                state,
                country,
                expert
            } = userProfile;
            console.log(userProfile);
            const source = this.state.avatarSource ? this.state.avatarSource : avatar ? { uri: avatar } : require('../../Assets/Icons/profileImage.png');
            return (
                <View style={scrollerContainer}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={profileImageContainer}>
                            <View style={imageContainerStyle}>
                                <Image style={imageStyle} source={source} />
                                {this.state.uploading ?
                                    <View style={modalStyle}>
                                        <ActivityIndicator size='large' color='#fff' />
                                    </View>
                                    :
                                    null}
                                <TouchableOpacity
                                    onPress={this.showImagePicker.bind(this)}
                                    activeOpacity={0.75}
                                    style={addImageButton}>
                                    <Image style={{ width: '50%', height: '50%' }}
                                        resizeMode='contain'
                                        source={avatar ? require('../../Assets/Icons/editImage.png') : require('../../Assets/Icons/plus.png')} />
                                </TouchableOpacity>
                            </View>
                            <View style={textContainer}>
                                <EditableTextField
                                    placeholder='Your name'
                                    keys={['first_name', 'last_name']}
                                    reference={userProfile}
                                    setUserProfile={setUserProfile}
                                    icon='username'>
                                    {first_name || last_name ? (first_name + ' ' + last_name) : ''}
                                </EditableTextField>
                            </View>
                        </View>

                        <View style={fieldContainer}>
                            <EditableTextField
                                number
                                keys={['phone']}
                                placeholder='Your phone number'
                                reference={userProfile}
                                icon='phone'
                                setUserProfile={setUserProfile}
                                title='Phone number'>
                                {phone}
                            </EditableTextField>
                        </View>
                        <View style={fieldContainer}>
                            <EditableTextField
                                placeholder='Your email address'
                                icon='email'
                                setUserProfile={setUserProfile}
                                title='Email address'>
                                {email}
                            </EditableTextField>
                        </View>
                        <View style={fieldContainer}>
                            <EditableTextField
                                placeholder='Your Address'
                                keys={['address']}
                                reference={userProfile}
                                icon='address'
                                setUserProfile={setUserProfile}
                                title='Address'>
                                {address}
                            </EditableTextField>
                        </View>
                        <View style={fieldContainer}>
                            <EditableTextField
                                placeholder='Your Address (continued)'
                                keys={['address2']}
                                reference={userProfile}
                                icon='address'
                                setUserProfile={setUserProfile}
                                title='Address (continued)'>
                                {address2}
                            </EditableTextField>
                        </View>
                        <View style={fieldContainer}>
                            <EditableTextField
                                placeholder='City'
                                keys={['city']}
                                reference={userProfile}
                                icon='city'
                                setUserProfile={setUserProfile}
                                title='City'>
                                {city}
                            </EditableTextField>
                        </View>
                        <View style={fieldContainer}>
                            <EditableTextField
                                placeholder='State'
                                keys={['state']}
                                reference={userProfile}
                                icon='state'
                                setUserProfile={setUserProfile}
                                title='State'>
                                {state}
                            </EditableTextField>
                        </View>
                        <View style={fieldContainer}>
                            <EditableTextField
                                placeholder='Country'
                                keys={['country']}
                                reference={userProfile}
                                icon='country'
                                setUserProfile={setUserProfile}
                                title='Country'>
                                {country}
                            </EditableTextField>
                        </View>
                        {/* <View style={fieldContainer}>
                            <EditableTextField
                                placeholder='Emirates id'
                                keys={['emirates_id']}
                                reference={userProfile}
                                icon='emirates_id'
                                setUserProfile={setUserProfile}
                                title='emirates_id'>
                                {emirates_id}
                            </EditableTextField>
                        </View> */}
                        <SelectField
                            keys={['expert']}
                            setUserProfile={setUserProfile}
                            options={[
                                { label: 'No, I can not operate automatic transmission', value: 0 },
                                { label: 'Yes, I can operate automatic transmission', value: 1 },
                            ]}
                            initial={expert}>
                            Some cars have an automatic transmittion system. Do you have the skill to operate them?
                        </SelectField>
                        <View style={docsContainer}>
                            <DocViewer reference={userProfile} docName='driving_license' setUserDocument={setUserDocument} title='Driving license' varified={is_driving_license_approved} url={driving_license} />
                        </View>
                        <View style={docsContainer}>
                            <DocViewer reference={userProfile} docName='carLicense_ownership' setUserDocument={setUserDocument} title='Car license ownership' varified={is_car_license_ownership_approved} url={carLicense_ownership} />
                        </View>
                        <View style={docsContainer}>
                            <DocViewer reference={userProfile} docName='car_maintenance_certificate' setUserDocument={setUserDocument} title='Car maintenance certificate' varified={is_car_migration_certificate_approved} url={car_maintenance_certificate} />
                        </View>
                        <View style={{ height: 20 }}></View>
                    </ScrollView>
                </View>
            );
        } else {
            return (
                <View style={notVerifiedContainer}>
                    <Image style={notVerifiedIcon} resizeMode='contain' source={require('../../Assets/Images/notVerified.png')} />
                    <Text style={notVerifiedText}>
                        {'Your account has not been verified yet.'}
                        {'\nKindly wait for your account approval.'}
                        {'\nOr contact our support team for more information'}
                    </Text>
                </View>
            )
        }
    }

    render() {

        const {
            container,
        } = Styles;

        const {
            navigation,
            loader
        } = this.props;


        return (
            <View style={container}>
                <CustomHeader backbutton onPressLeft={navigation.goBack}>
                    Your Account
                </CustomHeader>
                {this.renderProfile.bind(this)()}
                {loader ? <FullScreenModal loader /> : null}
            </View>
        )
    }

}


const imageSize = 150;
const addImageButtonSize = 40;

const Styles = StyleSheet.create({
    container: {
        flex: 1
    },

    scrollerContainer: {
        width: '100%',
        flex: 1,
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
        justifyContent: 'center',
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

    notVerifiedContainer: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    notVerifiedIcon: {
        width: 100,
        height: 100
    },

    notVerifiedText: {
        color: '#999',
        fontSize: 18,
        paddingTop: 20,
        textAlign: 'center'
    },

    modalStyle: {
        backgroundColor: '#0005',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        left: 0,
        position: 'absolute',
        borderRadius: imageSize / 2,
    }
});

const mapStateToProps = state => {
    return {
        ...state.profile,
        ...state.loader
    }
}

export default connect(mapStateToProps, { fetchUserProfile, setUserProfile, setProfilePicture, setUserDocument })(AccountScreen);