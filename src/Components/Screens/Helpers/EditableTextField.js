import React from 'react';
import { View, Image, Text, TextInput, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';



class EditableTextField extends React.Component {

    state = {
        editing: false,
        text: null,
        loader: false
    }

    componentDidMount() {
        const {
            children,
            placeholder,
        } = this.props;

        if (children) this.setState({ text: children });
        else this.setState({ text: placeholder });

    }

    submitData() {
        const {
            reference,
            keys,
            setUserProfile,
            children,
            placeholder
        } = this.props;
        if (this.state.text !== placeholder) {
            this.setState({ loader: true, editing: false });
            const object = {};
            const textArray = placeholder === 'Your name' ? this.state.text.split(' ') : [this.state.text];
            keys.forEach((el, i) => object[el] = textArray[i] ? textArray[i] : '');
            const callbackSuccess = () => {
                keys.forEach((el, i) => reference[el] = textArray[i]);
                this.setState({ loader: false });
            }
            const callbackFailiure = () => {
                if (children) this.setState({ text: children });
                else this.setState({ text: placeholder });
                this.setState({ loader: false });
            }
            setUserProfile(object, callbackSuccess, callbackFailiure);
        } else {
            this.setState({ editing: false });
        }
    }

    render() {
        const {
            container,
            iconStyle,
            textContainer,
            textStyle,
            textInputStyle,
            titleContainer,
            mainContainer,
            titleTextStyle,
            loaderContainer
        } = Styles;

        const {
            children,
            icon,
            title,
            number,
            placeholder,
            keys,
            reference
        } = this.props

        return (
            <View style={{ ...mainContainer, height: title ? 80 : 40 }}>
                {title ?
                    <View style={titleContainer}>
                        <Text style={titleTextStyle}>
                            {title}
                        </Text>
                    </View>
                    :
                    null
                }
                <View style={container}>
                    <Image
                        resizeMode='contain'
                        source={icons[icon]}
                        style={iconStyle} />
                    <View style={textContainer}>
                        {this.state.editing ?
                            <TextInput
                                onChangeText={text => this.setState({ text })}
                                value={children || this.state.text !== placeholder ? this.state.text : ''}
                                autoFocus={this.state.editing}
                                style={textInputStyle}
                                placeholder={placeholder}
                                keyboardType={number ? 'number-pad' : 'default'}
                                onSubmitEditing={this.submitData.bind(this)} />
                            :
                            <Text style={textStyle}>
                                {this.state.text}
                            </Text>
                        }
                    </View>
                    {this.state.loader ?
                        <View style={loaderContainer}>
                            <ActivityIndicator size='small' color='#000' />
                        </View>
                        :
                        null
                    }
                    {
                        keys && reference ?
                            <TouchableOpacity
                                activeOpacity={0.5}
                                onPress={() => {
                                    if (!this.state.editing) {
                                        this.setState({ editing: true })
                                    } else {
                                        this.submitData.bind(this)();
                                    }
                                }}>
                                <Image
                                    style={iconStyle}
                                    source={this.state.editing ? icons.ok : icons.edit} />
                            </TouchableOpacity>
                            :
                            null
                    }
                </View>
            </View>

        )
    }
}

const icons = {
    username: require('../../../Assets/Icons/username.png'),
    ok: require('../../../Assets/Icons/ok.png'),
    edit: require('../../../Assets/Icons/edit.png'),
    license: require('../../../Assets/Icons/license.png'),
    phone: require('../../../Assets/Icons/phone.png'),
    email: require('../../../Assets/Icons/email.png'),
    iqama: require('../../../Assets/Icons/iqama.png'),
    address: require('../../../Assets/Icons/address.png'),
    city: require('../../../Assets/Icons/city.png'),
    country: require('../../../Assets/Icons/country.png'),
    state: require('../../../Assets/Icons/state.png'),
    emirates_id: require('../../../Assets/Icons/emirates_id.png'),
}

const iconSize = 40;

const Styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        justifyContent: 'center',
        paddingHorizontal: 10
    },

    container: {
        width: '100%',
        height: 40,
        alignItems: 'center',
        marginVertical: 5,
        flexDirection: 'row'
    },

    iconStyle: {
        width: iconSize,
        height: iconSize,
        borderRadius: iconSize / 2
    },

    textContainer: {
        flex: 1,
        paddingHorizontal: 10,
        height: '100%',
        justifyContent: 'center'
    },

    textStyle: {
        color: '#555',
        fontSize: 18,
        padding: 0
    },

    titleTextStyle: {
        fontSize: 16,
        padding: 0,
        color: '#777'
    },

    textInputStyle: {
        fontSize: 18,
        padding: 0,
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#bbb'
    },

    titleContainer: {
        width: '40%',
        height: 30,
        justifyContent: 'center',
        paddingLeft: 10
    },

    loaderContainer: {
        height: '100%',
        width: 30,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default EditableTextField;