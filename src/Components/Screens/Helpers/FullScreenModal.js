import React from 'react';
import { View, Image, StyleSheet, ActivityIndicator } from 'react-native';
import Aux from '../../HOC/Auxiliary';

const Template = props => {

    const {
        container
    } = Styles;

    const {
        loader,
        activity
    } = props;

    const loadingImageSize = 100;

    return (
        <View style={container}>
            {loader ?
                <Aux>
                    {activity ?
                        <ActivityIndicator color='#fff' size='large' />
                        :
                        <Image
                            style={{ width: loadingImageSize, height: loadingImageSize }}
                            source={require('../../../Assets/loading.gif')} />
                    }
                </Aux>
                :
                null
            }
        </View>
    )
};

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Template;