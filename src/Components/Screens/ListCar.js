import React from 'react';
import { View, Text, StyleSheet, StatusBar, Alert } from 'react-native';
import CustomHeader from './Helpers/CustomHeader';
import { connect } from 'react-redux';
import constants from '../../constants';
import * as actions from '../../Redux/Actions';
import FullScreenModal from './Helpers/FullScreenModal';
import Aux from '../HOC/Auxiliary';
import ViewPager from '@react-native-community/viewpager';
import Guide from './Helpers/Guide';
import AddCarTitle from './Helpers/AddCarTitle';
import AddCarYear from './Helpers/AddCarYear';
import AddCarModel from './Helpers/AddCarModel';
import AddCarCity from './Helpers/AddCarCity';
import AddCarPrice from './Helpers/AddCarPrice';
import AddCarMaxPeople from './Helpers/AddCarMaxPeople';
import AddCarImage from './Helpers/AddCarImage';
import AddCarGalleryImages from './Helpers/AddCarGalleryImages';
import SubmitCar from './Helpers/SubmitCar';
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

    viewPagerRef = React.createRef();

    state = {
        loader: false,
        currentPage: 0
    }

    componentWillUnmount() {
        this.props.setCarCredential(reset_car_credentials);
    }

    render() {

        const {
            container,
            viewPageCnntainer,
            pageContainer
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
            topLocations,
            submitCar
        } = this.props;

        return (
            <Aux>
                <CustomHeader
                    backbutton
                    onPressLeft={() => {
                        if (!this.state.loader) navigation.goBack();
                    }}>List your car</CustomHeader>
                {this.state.loader ?
                    <FullScreenModal loader />
                    :
                    <View style={container}>
                        <View style={container}>
                            <ViewPager
                                ref={this.viewPagerRef}
                                scrollEnabled={false}
                                style={pageContainer}>
                                <View key={0} style={pageContainer}>
                                    {this.state.currentPage === 0 ?
                                        <Guide
                                            onCrossPress={() => navigation.goBack()}
                                            nextPage={() => {
                                                this.setState({ currentPage: 1 });
                                                this.viewPagerRef.current.setPage(1);
                                            }}
                                        />
                                        :
                                        null}
                                </View>
                                <View key={1} style={pageContainer}>
                                    {this.state.currentPage === 1 ?
                                        <AddCarTitle
                                            prevPage={() => {
                                                this.setState({ currentPage: 0 });
                                                this.viewPagerRef.current.setPage(0)
                                            }}
                                            nextPage={() => {
                                                this.setState({ currentPage: 2 });
                                                this.viewPagerRef.current.setPage(2);
                                            }}
                                            value={carName}
                                            onChangeText={text => setCarCredential(set_car_name, text)}
                                        />
                                        : null}
                                </View>
                                <View key={2} style={pageContainer}>
                                    {this.state.currentPage === 2 ?
                                        <AddCarYear
                                            prevPage={() => {
                                                this.setState({ currentPage: 1 });
                                                this.viewPagerRef.current.setPage(1)
                                            }}
                                            nextPage={() => {
                                                this.setState({ currentPage: 3 });
                                                this.viewPagerRef.current.setPage(3);
                                            }}
                                            value={carManufacturingYear}
                                            onChangeText={text => setCarCredential(set_car_manufacturing_year, text)}
                                        />
                                        : null}
                                </View>
                                <View key={3} style={pageContainer}>
                                    {this.state.currentPage === 3 ?
                                        <AddCarModel
                                            prevPage={() => {
                                                this.setState({ currentPage: 2 });
                                                this.viewPagerRef.current.setPage(2)
                                            }}
                                            nextPage={() => {
                                                this.setState({ currentPage: 4 });
                                                this.viewPagerRef.current.setPage(4);
                                            }}
                                            value={carModel}
                                            onChangeText={text => setCarCredential(set_car_model, text)}
                                        />
                                        : null}
                                </View>
                                <View key={4} style={pageContainer}>
                                    {this.state.currentPage === 4 ?
                                        <AddCarCity
                                            prevPage={() => {
                                                this.setState({ currentPage: 3 });
                                                this.viewPagerRef.current.setPage(3)
                                            }}
                                            nextPage={() => {
                                                this.setState({ currentPage: 5 });
                                                this.viewPagerRef.current.setPage(5);
                                            }}
                                            value={carCity}
                                            cities={topLocations}
                                            location={carLocation}
                                            onChangeValue={value => setCarCredential(set_car_city, value)}
                                            navigation={navigation}
                                        />
                                        : null}
                                </View>
                                <View key={5} style={pageContainer}>
                                    {this.state.currentPage === 5 ?
                                        <AddCarMaxPeople
                                            prevPage={() => {
                                                this.setState({ currentPage: 4 });
                                                this.viewPagerRef.current.setPage(4)
                                            }}
                                            nextPage={() => {
                                                this.setState({ currentPage: 6 });
                                                this.viewPagerRef.current.setPage(6);
                                            }}
                                            value={maxPeople}
                                            onChangeText={text => setCarCredential(set_max_peopel, text)}
                                        />
                                        : null}
                                </View>
                                <View key={6} style={pageContainer}>
                                    {this.state.currentPage === 6 ?
                                        <AddCarPrice
                                            prevPage={() => {
                                                this.setState({ currentPage: 5 });
                                                this.viewPagerRef.current.setPage(5)
                                            }}
                                            nextPage={() => {
                                                this.setState({ currentPage: 7 });
                                                this.viewPagerRef.current.setPage(7);
                                            }}
                                            value={carPrice}
                                            onChangeText={text => setCarCredential(set_car_price, text)}
                                        />
                                        : null}
                                </View>
                                <View key={7} style={pageContainer}>
                                    {this.state.currentPage === 7 ?
                                        <AddCarImage
                                            prevPage={() => {
                                                this.setState({ currentPage: 6 });
                                                this.viewPagerRef.current.setPage(6)
                                            }}
                                            nextPage={() => {
                                                this.setState({ currentPage: 8 });
                                                this.viewPagerRef.current.setPage(8);
                                            }}
                                            value={carImage}
                                            onPick={source => setCarCredential(set_car_image, source)}
                                        />
                                        : null}
                                </View>
                                <View key={8} style={pageContainer}>
                                    {this.state.currentPage === 8 ?
                                        <AddCarGalleryImages
                                            prevPage={() => {
                                                this.setState({ currentPage: 7 });
                                                this.viewPagerRef.current.setPage(7)
                                            }}
                                            nextPage={() => {
                                                this.setState({ currentPage: 9 });
                                                this.viewPagerRef.current.setPage(9);
                                            }}
                                            value={galleryImages}
                                            onPick={source => setCarCredential(set_gallery_images, source)}
                                        />
                                        : null}
                                </View>
                                <View key={9} style={pageContainer}>
                                    {this.state.currentPage === 9 ?
                                        <SubmitCar
                                            prevPage={() => {
                                                this.setState({ currentPage: 8 });
                                                this.viewPagerRef.current.setPage(8)
                                            }}
                                            nextPage={() => {
                                                this.setState({ loader: true })
                                                const callbackSuccess = () => {
                                                    this.setState({ loader: false });
                                                    Alert.alert(
                                                        'Car submitted successfully',
                                                        'Thank you for submitting the car. You shall recieve an email once your car is approved by our local authority',
                                                        [
                                                            { text: 'OK', onPress: () => navigation.popToTop() }
                                                        ]
                                                    );
                                                }

                                                const callbackFailure = () => {
                                                    this.setState({ loader: false });
                                                    Alert.alert(
                                                        'Something went wrong',
                                                        'We appologize for the inconvenience. A report has been submitted to our admin about the error. Please try again. If the error continues to appear, contact the system administrator',
                                                        [
                                                            { text: 'OK', onPress: () => navigation.popToTop() }
                                                        ]
                                                    )
                                                }
                                                submitCar(carName, carManufacturingYear, carCity, carLocation.latitude, carLocation.longitude, carPrice, maxPeople, carImage, galleryImages, callbackSuccess, callbackFailure);
                                            }}
                                        />
                                        : null}
                                </View>
                            </ViewPager>
                        </View>
                    </View>
                }
            </Aux>
        );
    }
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    pageContainer: {
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