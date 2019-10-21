import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Aux from '../HOC/AUX/Aux';
import BottomNavigator from './Helpers/BottomNavigator';

class Messages extends React.Component {

    render() {
        const {
            container
        } = Styles;
    
        return (
            <Aux>
                <View style={container}>
                    <Text>Messages screen</Text>
                </View>
                <BottomNavigator 
                navigation={this.props.navigation}
                active='Messages'/>
            </Aux>
        )
    }
}

const Styles = StyleSheet.create({
    contaienr: {
        width: '100%'
    }
});

export default Messages;