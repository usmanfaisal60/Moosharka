import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Aux from '../HOC/AUX/Aux';
import BottomNavigator from './Helpers/BottomNavigator';
import { connect } from 'react-redux';

class Messages extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pushedToLogin: false
        }

        const {
            loginStatus,
            navigation
        } = this.props;

        if (!loginStatus) {
            navigation.navigate('LoginOrSignUp');
            this.state.pushedToLogin = true;
        }
    }

    componentDidMount() {
        const {
            navigation
        } = this.props;

        const prevScreen = navigation.getParam('prevScreen');

        this.FocusEvent = navigation.addListener('didFocus', () => {
            this.forceUpdate();
        });
    }

    componentDidUpdate() {
        const {
            loginStatus,
            navigation
        } = this.props;

        const prevScreen = navigation.getParam('prevScreen');

        if (!this.state.pushedToLogin && !loginStatus) {
            navigation.replace(prevScreen);
        }
    }

    componentWillUnmount() {
        this.FocusEvent.remove();
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

export default connect(mapStateToProps)(Messages);