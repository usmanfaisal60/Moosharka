import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import CustomHeader from './Helpers/CustomHeader';
import constants from '../../constants';
import { connect } from 'react-redux';
import * as actions from '../../Redux/Actions';
import FullScreenModal from './Helpers/FullScreenModal';
import Aux from '../HOC/Auxiliary';
class LikedCars extends React.Component {

    componentDidMount() {
        const {
            fetchUserFavourites
        } = this.props;

        fetchUserFavourites();
    }

    render() {

        const {
            container,
            bodyContainer,
            favouriteCarStyle,
            favouritesText
        } = Styles;

        const {
            navigation,
            loader,
            userFavourites
        } = this.props;

        console.log(this.props);

        return (
            <View style={container}>
                <CustomHeader backbutton onPressLeft={() => navigation.goBack()}>Liked Cars</CustomHeader>
                {userFavourites ?
                    <View style={bodyContainer}>
                        {userFavourites ?
                            <Aux>
                                <Image
                                    resizeMode='contain'
                                    style={favouriteCarStyle}
                                    source={require('../../Assets/Icons/favorite-car.png')} />
                                <Text style={favouritesText}>
                                    {'You do not have any favourite cars\n'}
                                    {'When you add cars to your favourites, They will appear here'}
                                </Text>
                            </Aux>
                            :
                            null
                        }
                    </View>
                    :
                    null
                }
                {loader ? <FullScreenModal loader /> : null}
            </View>
        )
    }
}

const Styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },

    bodyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    favouriteCarStyle: {
        width: 100,
        height: 100,
        marginBottom: 30
    },

    favouritesText: {
        width: '80%',
        textAlign: 'center',
        color: '#777'
    }

});

const mapStateToProps = state => {
    return {
        ...state.loader,
        ...state.profile
    }
}

export default connect(mapStateToProps, actions)(LikedCars);