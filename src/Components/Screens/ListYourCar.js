import React from 'react';
import { View, ImageBackground, Text, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import AdCard from './Helpers/AdCars';


class ListYourCar extends React.Component {
    render() {

        const {
            container,
            swiperStyle,
            title
        } = Styles;

        return (
            <ImageBackground resizeMode='cover' style={container} source={require('../../Assets/Images/sd.jpg')}>
                <Swiper style={container}>
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
                            Ready, set, list
                        </Text>
                        <AdCard title='You’re in control'>
                            This will take about 10 minutes, and you’ll need:
                        </AdCard>
                        
                    </View>
                </Swiper>
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
        paddingTop: 20
    },

    title: {
        fontSize: 30,
        color: '#fff',
        padding: 20
    }
});

export default ListYourCar;