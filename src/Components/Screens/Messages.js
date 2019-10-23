import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import Aux from '../HOC/AUX/Aux';
import BottomNavigator from './Helpers/BottomNavigator';
import { setCrossListener } from '../../Redux/Actions';
import { connect } from 'react-redux';
import CustomHeader from './Helpers/CustomHeader';

class Messages extends React.Component {

    render() {
        const {
            container,
            imageContainer,
            imageStyle
        } = Styles;

        const {
            loginStatus
        } = this.props;
        
        return (
            <Aux>
                <View style={container}>
                    {loginStatus ?
                        <Aux>
                            <CustomHeader >Messages</CustomHeader>
                            <View style={imageContainer}>
                                <Image style={imageStyle} source={require('../../Assets/Icons/message.png')}/>
                            </View>
                            <Text>
                                No messages yet
                            </Text>
                        </Aux>
                        :
                        null}
                </View>
                <BottomNavigator
                    navigation={this.props.navigation}
                    active='Messages' />
            </Aux>
        )
    }
}

const Styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    imageContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#ddd',
        justifyContent: 'center',
        alignItems: 'center'
    },

    imageStyle: {
        width: '60%',
        height: '60%',
        opacity: 0.5
    }
});

const mapStateToProps = state => {
    return {
        ...state.login
    }
}

export default connect(mapStateToProps, { setCrossListener })(Messages);