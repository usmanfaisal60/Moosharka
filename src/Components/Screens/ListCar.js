import React from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView } from 'react-native';
import CustomHeader from './Helpers/CustomHeader';
import { connect } from 'react-redux';
import constants from '../../constants';
import AddCarCard from './Helpers/AddCarCard';
import AddCarBanner from './Helpers/AddCarBanner';
import Gallery from './Helpers/Gallery';
import SubmitSection from './Helpers/SubmitSection';
import * as actions from '../../Redux/Actions';
import FullScreenModal from './Helpers/FullScreenModal';


const {
    set_car_name,
    set_car_manufacturing_year,
    set_car_model,
    set_car_city,
    set_car_price,
    set_max_peopel,
    set_car_image,
    set_gallery_images,
    reset_car_credentials
} = constants.red_types;

class ListCar extends React.Component {

    state = {
        loader: false
    }

    componentWillUnmount() {
        this.props.setCarCredential(reset_car_credentials);
    }

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
            galleryImages,
            setCarCredential,
            topLocations
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
                        <ScrollView style={{ width: '100%' }} showsVerticalScrollIndicator={false}>
                            <AddCarBanner onImagePicked={setCarCredential.bind(this, set_car_image)} />
                            <AddCarCard
                                icon='name'
                                label='Name *'
                                value={carName}
                                onChangeText={setCarCredential.bind(this, set_car_name)} />
                            <AddCarCard
                                keyboardType='number-pad'
                                icon='year'
                                label='Manufacturing year '
                                value={carManufacturingYear}
                                onChangeText={setCarCredential.bind(this, set_car_manufacturing_year)} />
                            <AddCarCard
                                label='Model *'
                                icon='model'
                                value={carModel}
                                onChangeText={setCarCredential.bind(this, set_car_model)} />
                            <AddCarCard
                                label='Car city *'
                                value={carCity}
                                icon='city'
                                dropDown={topLocations ? topLocations : [{ title: 'Please turn on WiFi or Mobile data', id: -1 }]}
                                onValueChange={setCarCredential.bind(this, set_car_city)} />
                            {carCity && carCity != -1 ?
                                <AddCarCard
                                    label={'Car Location * ' + (carLocation ? '(Picked)' : '')}
                                    buttonText={carLocation ? 'Change location' : 'Select location'}
                                    icon='location'
                                    onPress={() => navigation.navigate('PickCarLocation', { city: JSON.stringify(topLocations.find(el => el.id === carCity)) })} />
                                :
                                null
                            }
                            <AddCarCard
                                keyboardType='number-pad'
                                label='Car price ($/day) *'
                                icon='price'
                                value={carPrice}
                                onChangeText={setCarCredential.bind(this, set_car_price)} />
                            <AddCarCard
                                keyboardType='number-pad'
                                icon='max'
                                label='Maximum people *'
                                dropDown={[
                                    { title: '1', id: '1' },
                                    { title: '2', id: '2' },
                                    { title: '3', id: '3' },
                                    { title: '4', id: '4' },
                                    { title: '5', id: '5' },
                                    { title: '6', id: '6' },
                                    { title: '7', id: '7' },
                                    { title: '8', id: '8' }
                                ]}
                                onValueChange={setCarCredential.bind(this, set_max_peopel)} />
                            <Gallery galleryImages={galleryImages} setCarCredential={setCarCredential.bind(this, set_gallery_images)} />
                            <SubmitSection showLoader={() => this.setState({ loader: true })} hideLoader={() => this.setState({ loader: false })} {...this.props} />
                        </ScrollView>
                    </View>
                </View>
                {this.state.loader ? <FullScreenModal loader /> : null}
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
        ...state.listCar,
        ...state.search
    }
}

export default connect(mapStateToProps, actions)(ListCar);