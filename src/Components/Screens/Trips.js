import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Aux from '../HOC/AUX/Aux';
import BottomNavigator from './Helpers/BottomNavigator';

class Trips extends React.Component {

    render() {
        const {
            container
        } = Styles;
    
        return (
            <Aux>
                <View style={container}>
                    <Text>Trips screen</Text>
                </View>
                <BottomNavigator 
                navigation={this.props.navigation}
                active='Trips'/>
            </Aux>
        )
    }
}

const Styles = StyleSheet.create({
    contaienr: {
        width: '100%',
        height: '100%'
    }
});

export default Trips;