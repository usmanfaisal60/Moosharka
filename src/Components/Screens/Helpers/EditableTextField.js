import React from 'react';
import { View, Image, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';



class EditableTextField extends React.Component {

    state = {
        editing: false
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
            titleTextStyle
        } = Styles;

        const {
            children,
            icon,
            title,
            number
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
                                onChangeText={text => { }}
                                autoFocus={this.state.editing}
                                style={textInputStyle}
                                value={`${children}`}
                                keyboardType={number ? 'number-pad' : 'default'}
                                onSubmitEditing={() => this.setState({ editing: false })} />
                            :
                            <Text style={textStyle}>
                                {children}
                            </Text>
                        }
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => {
                            if (this.state.editing) {
                                this.setState({ editing: false })
                            } else {
                                this.setState({ editing: true })
                            }
                        }}>
                        <Image
                            style={iconStyle}
                            source={this.state.editing ? icons.ok : icons.edit} />
                    </TouchableOpacity>
                </View>
            </View>

        )
    }
}

const icons = {
    username: require('../../../Assets/Icons/username.png'),
    ok: require('../../../Assets/Icons/ok.png'),
    edit: require('../../../Assets/Icons/edit.png'),
    cnic: require('../../../Assets/Icons/cnic.png'),
    license: require('../../../Assets/Icons/license.png'),
    phone: require('../../../Assets/Icons/phone.png'),
    iqama: require('../../../Assets/Icons/iqama.png'),
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
    },

    textContainer: {
        flex: 1,
        paddingHorizontal: 10,
        height: '100%',
        justifyContent: 'center'
    },

    textStyle: {
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
        width: '80%',
        borderBottomWidth: 1,
        borderBottomColor: '#bbb'
    },

    titleContainer: {
        width: '40%',
        height: 30,
        justifyContent: 'center',
        paddingLeft: 10
    },
});

export default EditableTextField;