import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const Description = props => {
    
    const {
        container,
        iconStyle,
        titleStyle,
        childrenStyle
    } = Styles;

    const {
        icon,
        title,
        children
    } = props;

    return (
        <View style={container}>
            <Image style={iconStyle} source={icons[icon]} resizeMode='contain' />
            <Text style={titleStyle}>
                {title}
            </Text>
            <Text style={childrenStyle}>
                {children}
            </Text>
        </View>
    )
}

const icons = {
    carpage:require('../../../Assets/Icons/carpage.jpg'),
    thumb: require('../../../Assets/Icons/thumb.jpg'),
    customer_support: require('../../../Assets/Icons/customer_support.jpg'),
    insurance_options: require('../../../Assets/Icons/insurance_options.jpg')
}

const iconSize = 40;

const Styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        padding: 20
    },

    iconStyle: {
        width: iconSize,
        height: iconSize,
        backgroundColor: '#fff'
    },

    titleStyle: {
        fontSize: 20,
        padding: 10
    },

    childrenStyle: {
        fontSize: 14,
        textAlign: 'center',
    }
})

export default Description;