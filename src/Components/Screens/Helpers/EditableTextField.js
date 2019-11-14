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
            textInputStyle
        } = Styles;

        const {
            children,
            icon,
        } = this.props

        return (
            <View style={container}>
                <Image
                    resizeMode='contain'
                    source={icons[icon]}
                    style={iconStyle} />
                <View style={textContainer}>
                    {this.state.editing ?
                        <TextInput
                            style={textInputStyle}
                            value={children} />
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
        )
    }
}

const icons = {
    username: require('../../../Assets/Icons/username.png'),
    ok: require('../../../Assets/Icons/ok.png'),
    edit: require('../../../Assets/Icons/edit.png'),
}

const iconSize = 40;

const Styles = StyleSheet.create({
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
        height: '100%',
        justifyContent: 'center'
    },

    textStyle: {
        fontSize: 18,
        padding: 0
    },

    textInputStyle: {
        fontSize: 18,
        padding: 0,
        width: '80%',
        borderBottomWidth: 1,
        borderBottomColor: '#bbb'
    }
});

export default EditableTextField;