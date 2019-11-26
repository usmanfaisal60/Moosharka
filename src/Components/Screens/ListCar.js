import React from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView } from 'react-native';
import CustomHeader from './Helpers/CustomHeader';
import { connect } from 'react-redux';
import constants from '../../constants';
import AddCarCard from './Helpers/AddCarCard';
import AddCarBanner from './Helpers/AddCarBanner';
import * as actions from '../../Redux/Actions';


const {
    set_car_name,
    set_car_manufacturing_year,
    set_car_model,
    set_car_location,
    set_car_city,
    set_car_price,
    set_max_peopel,
    set_minimum_people,
    set_car_image,
    set_gallery_images,
} = constants.red_types;

class ListCar extends React.Component {
    render() {

        const {
            container,
            outerContainer
        } = Styles;

        const {
            navigation,
            carName,
            carManufacturingYear,
            carModel,
            carLocation,
            carCity,
            carPrice,
            maxPeople,
            minPeople,
            carImage,
            galleryImages: [],
            setCarCredential
        } = this.props;

        return (
            <View style={container}>
                <StatusBar backgroundColor='#222' barStyle='light-content' />
                <CustomHeader
                    backbutton
                    onPressLeft={() => {
                        navigation.goBack();
                    }}>List your car</CustomHeader>
                <View style={outerContainer}>
                    <View style={container}>
                        <ScrollView style={{ width: '100%' }}>
                            <AddCarBanner />
                            <AddCarCard
                                label='Name *'
                                value={carName}
                                onChangeText={setCarCredential.bind(this, set_car_name)} />
                            <AddCarCard
                                keyboardType='number-pad'
                                label='Manufacturing year '
                                value={carManufacturingYear}
                                onChangeText={setCarCredential.bind(this, set_car_manufacturing_year)} />
                            <AddCarCard
                                label='Model *'
                                value={carModel}
                                onChangeText={setCarCredential.bind(this, set_car_model)} />
                            <AddCarCard
                                label='Car city *'
                                value={carCity}
                                onChangeText={setCarCredential.bind(this, set_car_city)} />
                            <AddCarCard
                                keyboardType='number-pad'
                                label='car price *'
                                value={carPrice}
                                onChangeText={setCarCredential.bind(this, set_car_price)} />
                            <AddCarCard
                                keyboardType='number-pad'
                                label='Maximum people *'
                                value={maxPeople}
                                onChangeText={setCarCredential.bind(this, set_max_peopel)} />
                            <AddCarCard
                                keyboardType='number-pad'
                                label='Minimum people *'
                                value={minPeople}
                                onChangeText={setCarCredential.bind(this, set_minimum_people)} />
                        </ScrollView>
                    </View>
                </View>
            </View>
        );
    }
}

const Styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%'
    },

    outerContainer: {
        paddingTop: constants.headerHeight,
        width: '100%',
        height: '100%'
    }


});

const mapStateToProps = state => {
    return {
        ...state.loader,
        ...state.listCar
    }
}

export default connect(mapStateToProps, actions)(ListCar);