import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const DocViewer = props => {

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
        varifiedTextContainer
    } = Styles;

    const {
        title,
        url,
        varified
    } = props

    const source = (url && url !== 'http://ejaroo.com') ? { uri: url } : require('../../../Assets/Icons/cnic.png');

    console.log(url);

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
                    source={source} />
                {url && !varified ?
                    <View style={modal}>
                        <Text style={varificationText}>
                            {'This document is being varified by admin.'}
                            {'\nYou will be able to use ejaroo when all of your documents are varified'}
                        </Text>
                    </View>
                    :
                    null}
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
                null}

        </View>
    )
};

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
    }
});

export default DocViewer;