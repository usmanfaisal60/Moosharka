import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import CustomHeader from './Helpers/CustomHeader';
import constants from '../../constants';
import { connect } from 'react-redux';
import * as actions from '../../Redux/Actions';
import FullScreenModal from './Helpers/FullScreenModal';

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
                            <View style={container}>
                                <Image
                                    resizeMode='contain'
                                    style={favouriteCarStyle}
                                    source={require('../../Assets/Icons/favorite-car.png')} />
                                <Text style={favouritesText}>
                                    {'You do not have any favourite cars\n'}
                                    {'When you add cars to your favourites, They will appear here'}
                                </Text>
                            </View>
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
        justifyContent: 'center',
        alignItems: 'center'
    },

    bodyContainer: {
        width: '100%',
        height: '100%',
        paddingTop: constants.headerHeight,
    },

    favouriteCarStyle: {
        width: 100,
        height: 100
    },

    favouritesText: {
        paddingTop: 20,
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