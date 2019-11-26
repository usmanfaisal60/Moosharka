import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

class AddCraBanner extends React.Component {

    state = {
        source: null
    }

    render() {
        const {
            container,
            imageStyle,
            addIconStyle,
            addIconContainer,
            touchContainer
        } = Styles;

        return (

            <View style={container}>
                <Image
                    source={require('../../../Assets/Icons/pick-car.jpg')}
                    style={imageStyle}
                    resizeMode='cover' />
                {!this.state.source ?
                    <TouchableOpacity activeOpacity={0.6} style={touchContainer}>
                        <View style={addIconContainer}>
                            <Image
                                source={require('../../../Assets/Icons/plus.png')}
                                style={addIconStyle}
                                resizeMode='cover' />
                        </View>
                    </TouchableOpacity>
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
        height: 200,
    },

    imageStyle: {
        height: '100%',
        width: '100%'
    },

    addIconStyle: {
        width: '50%',
        height: '50%'
    },

    addIconContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#43a047',
        justifyContent: 'center',
        alignItems: 'center'
    },

    touchContainer: {
        bottom: 0,
        right: 0,
        margin: 20,
        position: 'absolute',
    }
});

export default AddCraBanner;