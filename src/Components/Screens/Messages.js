import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Aux from '../HOC/AUX/Aux';
import BottomNavigator from './Helpers/BottomNavigator';
import { setCrossListener } from '../../Redux/Actions';
import { connect } from 'react-redux';

class Messages extends React.Component {
    constructor(props) {
        super(props);

        const {
            loginStatus,
            navigation,
            setCrossListener
        } = this.props;

        const prevScreen = navigation.getParam('prevScreen');

        if (!loginStatus) {
            navigation.navigate('LoginOrSignUp');
            setCrossListener(navigation.replace.bind(this, prevScreen));
        }
    }

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
                    active='Messages' />
            </Aux>
        )
    }
}

const Styles = StyleSheet.create({
    contaienr: {
        width: '100%'
    }
});

const mapStateToProps = state => {
    return {
        ...state.login
    }
}

export default connect(mapStateToProps, { setCrossListener })(Messages);