import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Aux from '../HOC/AUX/Aux';
import BottomNavigator from './Helpers/BottomNavigator';
import { setCrossListener } from '../../Redux/Actions';
import { connect } from 'react-redux';

class Trips extends React.Component {

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

    componentDidMount() {
        const {
            navigation,
        } = this.props;

        this.FocusEvent = navigation.addListener('didFocus', () => {
            this.forceUpdate();
        });
    }

    componentDidUpdate() {
        const {
            loginStatus,
            navigation,
            loginOrSignupCross,
            crossPressed
        } = this.props;

        const prevScreen = navigation.getParam('prevScreen');

        if (loginOrSignupCross && !loginStatus) {
            navigation.replace(prevScreen);
            setCrossListener(navigation.replace.bind(this, prevScreen));

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
                    <Text>Trips screen</Text>
                </View>
                <BottomNavigator
                    navigation={this.props.navigation}
                    active='Trips' />
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

const mapStateToProps = state => {
    return {
        ...state.login
    }
}

export default connect(mapStateToProps, { setCrossListener })(Trips);