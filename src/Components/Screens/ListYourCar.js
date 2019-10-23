import React from 'react';
import { View, Image, ImageBackground, Text, StyleSheet, TouchableNativeFeedback, TouchableOpacity, Platform } from 'react-native';
import Swiper from 'react-native-swiper';
import AdCard from './Helpers/AdCars';
import NumberedAdCard from './Helpers/NumberedAdCard';
import CustomButton from './Helpers/CustomButton';

class ListYourCar extends React.Component {
    render() {

        const {
            container,
            swiperStyle,
            title,
            crossContainer,
            iconContainer,
            crossIcon,
            listcarButton
        } = Styles;

        const {
            navigation,
        } = this.props;

        return (
            <ImageBackground resizeMode='cover' style={container} source={require('../../Assets/Images/sd.jpg')}>
                <Swiper
                    loop={false}
                    dot={
                        <View style={{ width: 15, height: 15, borderRadius: 7.5, borderColor: '#fff', borderWidth: 1, margin: 5 }}></View>
                    }
                    activeDot={
                        <View style={{ width: 15, height: 15, borderRadius: 7.5, backgroundColor: '#fff', margin: 5 }}></View>
                    }
                    style={container}>
                    <View style={swiperStyle}>
                        <Text style={title}>
                            List your car for free
                        </Text>
                        <AdCard title='You’re in control'>
                            In your settings, you can set your own minimum daily price for trips and adjust your availability, so you only get trips that are right for you
                        </AdCard>
                        <AdCard title='Set Limits'>
                            You’ll also be able to use your car settings to choose a milage limit for trips. Offer delivery to attract more travelers and earn more money.
                        </AdCard>
                    </View>
                    <View style={swiperStyle}>
                        <Text style={title}>
                            You’re covered
                        </Text>
                        <AdCard title='Insurance'>
                            You’re covered with up to $1 million in liability insurance, and your car is contractually protected against theft and physical damage.
                        </AdCard>
                        <AdCard title='Earnings'>
                            You’ll earn 65% to 85% of the trip price, depending on the vehicle protection package you choose.
                        </AdCard>
                    </View>
                    <View style={swiperStyle}>
                        <Text style={title}>
                            Peace of mind
                        </Text>
                        <AdCard title='You’re safe'>
                            We verify each travellers identity by running a complete background check.
                        </AdCard>
                        <AdCard title='You are not alone'>
                            From our 24/7 emergency line to trips and tricks to earn more with your car, we’ll be here for you every step of the way.
                        </AdCard>
                    </View>
                    <View style={swiperStyle}>
                        <Text style={title}>
                            Get Paid
                        </Text>
                        <AdCard title='Pricing'>
                            Turo will dynamically set your car’s daily price based on make, model, location and time of year to maximixe your earnings. If you prefer, you can manually set your own daily price.                        </AdCard>
                        <AdCard title='Payment'>
                            You’ll get paid via direct deposit within 5 days of a trip’s end.
                        </AdCard>
                    </View>
                    <View style={swiperStyle}>
                        <Text style={title}>
                            Ready, set, list
                        </Text>
                        <AdCard title='You’re in control'>
                            This will take about 10 minutes, and you’ll need:
                        </AdCard>
                        <NumberedAdCard number='1' title='License plate number'>
                            We need this so that your car is covered by our protection plans.
                        </NumberedAdCard>
                        <NumberedAdCard number='2' title='Photos of your car'>
                            Upload photos or use the app to take pictures to spice up your listing.
                        </NumberedAdCard>
                        <AdCard>
                            From our 24/7 emergency line to trips and tricks to earn more with your car, we’ll be here for you every step of the way.
                        </AdCard>
                        <View style={listcarButton}>
                            <CustomButton
                                onPress={() => {
                                    navigation.navigate('LoginOrSignUp')
                                }}>List your car</CustomButton>
                        </View>
                    </View>
                </Swiper>
                <View style={crossContainer}>
                    {Platform.OS === 'android' ?
                        <TouchableNativeFeedback onPress={() => navigation.goBack()} background={TouchableNativeFeedback.Ripple('#fff')}>
                            <View style={iconContainer}>
                                <Image resizeMode='contain' style={crossIcon} source={require('../../Assets/Icons/WhiteIcons/cross.png')} />
                            </View>
                        </TouchableNativeFeedback>
                        :
                        <TouchableOpacity onPress={() => navigation.goBack()} background={TouchableNativeFeedback.Ripple('#fff')}>
                            <View style={iconContainer}>
                                <Image resizeMode='contain' style={crossIcon} source={require('../../Assets/Icons/WhiteIcons/cross.png')} />
                            </View>
                        </TouchableOpacity>}
                </View>
            </ImageBackground >
        )
    }

}

const Styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },

    swiperStyle: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 50
    },

    title: {
        fontSize: 30,
        color: '#fff',
        padding: 20
    },

    crossContainer: {
        width: 30,
        height: 30,
        position: 'absolute',
        top: 0,
        left: 0,
        margin: 30,
        borderRadius: 15,
        overflow: 'hidden'
    },

    iconContainer: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },

    crossIcon: {
        width: 20,
        height: 20,
    },

    listcarButton: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        marginBottom: '20%'
    }
});

export default ListYourCar;