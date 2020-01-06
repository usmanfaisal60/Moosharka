import React from 'react';
import {
    View,
    Image,
    ImageBackground,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    Keyboard,
    TouchableNativeFeedback,
    Platform,
    TouchableHighlight
} from 'react-native';
import Description from './Helpers/Description';
import UserMightLike from './Helpers/UserMightLikes';
import BottomNavigator from './Helpers/BottomNavigator';
import TopDestinations from './Helpers/TopDestinations';
import CustomButton from './Helpers/CustomButton';
import { fetchTopLocations, searchKeyWord, setSearchId, setSearchKeyWord, setCredentials } from '../../Redux/Actions';
import { connect } from 'react-redux';
import firebase from 'react-native-firebase';
import AsyncStorage from '@react-native-community/async-storage';
import constants from '../../constants';



const Styles = StyleSheet.create({
    searchBg: {
        width: '100%',
        height: 420,
        justifyContent: 'center',
        alignItems: 'center'
    },

    adTitle: {
        fontSize: 27,
        width: '70%',
        color: '#fff',
        textAlign: 'center',
        padding: 20
    },

    searchView: {
        width: '90%',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },


    searchIcon: {
        width: 30,
        height: 30,
        opacity: 0.5
    },

    searchText: {
        minWidth: '50%',
        opacity: 0.5
    },

    insurancePartenerTextContainer: {
        padding: 10,
        height: 30,
        width: '60%',
        alignSelf: 'center',
        backgroundColor: '#fff',
        marginTop: -15,
        borderRadius: 15,
        justifyContent: 'center',
        alignContent: 'center'
    },

    insurancePartenerText: {
        textAlign: 'center',
        color: '#999'
    },

    libMutualContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        height: 100,
        overflow: 'hidden',
        alignSelf: 'center'
    },

    title: {
        fontSize: 20,
        alignSelf: 'center',
        paddingBottom: 5
    },


    description: {
        fontSize: 16,
        alignSelf: 'center'
    },

    iosContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

class Search extends React.Component {

    state = {
        showBottomNavigator: true
    }

    async checkLogin() {
        if (!constants.token) {
            const token = await AsyncStorage.getItem('token');
            if (!token) {
                return;
            }
            constants.token = token;
        }
        this.props.setCredentials(constants.red_types.set_login, true);
    }

    componentDidMount() {
        Keyboard.addListener('keyboardDidShow', () => {
            this.setState({
                showBottomNavigator: false
            });
        });

        Keyboard.addListener('keyboardDidHide', () => {
            this.setState({
                showBottomNavigator: true
            })
        });

        const {
            fetchTopLocations,
            topLocations,
        } = this.props;

        if (!topLocations) {
            fetchTopLocations();
        }

        // firebase.messaging().getToken().then(token => console.log(token));

        this.checkLogin.bind(this)();
    }

    render() {

        const {
            searchBg,
            searchView,
            searchIcon,
            searchText,
            adTitle,
            insurancePartenerTextContainer,
            insurancePartenerText,
            libMutualContainer,
            title,
            description,
            iosContainer
        } = Styles;

        const {
            navigation,
            topLocations,
            setSearchId,
            all_locationsError,
            loader,
            setSearchKeyWord
        } = this.props;

        return (
            <View style={{ width: '100%', height: '100%' }}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    onScroll={(event) => {
                        Keyboard.dismiss();
                    }}>
                    <StatusBar backgroundColor='#000' barStyle='light-content' />
                    <ImageBackground
                        resizeMode='cover'
                        source={require('../../Assets/Images/1.jpg')}
                        style={searchBg} >
                        <Text style={adTitle}>
                            Way better than a rental car
                        </Text>
                        {Platform.OS === 'android' ?
                            <TouchableNativeFeedback onPress={() => navigation.navigate('SearchResults')} background={TouchableNativeFeedback.Ripple('#0005')}>
                                <View style={searchView}>
                                    <Image style={searchIcon} source={require('../../Assets/Icons/search.png')} />
                                    <Text style={searchText}>city, airport, address or hotel</Text>
                                </View>
                            </TouchableNativeFeedback>
                            :
                            <TouchableHighlight style={iosContainer} onPress={() => navigation.navigate('SearchResults')} background={TouchableNativeFeedback.Ripple('#0005')}>
                                <View style={searchView}>
                                    <Image style={searchIcon} source={require('../../Assets/Icons/search.png')} />
                                    <Text style={searchText}>city, airport, address or hotel</Text>
                                </View>
                            </TouchableHighlight>
                        }
                    </ImageBackground>
                    <View style={insurancePartenerTextContainer}>
                        {/* <Text style={insurancePartenerText}>
                            INSURANCE PARTENERS
                        </Text> */}
                    </View>
                    {/* <View style={libMutualContainer}>
                        <Image style={{ width: '100%' }} resizeMode='contain' source={require('../../Assets/Images/liberty_mutual.jpg')} />
                    </View> */}

                    <Description icon='carpage' title='Endless options'>
                        Choose from hundreds of models you won’t find anywhere else. Pick it up or get it delivered where you want it.
                    </Description>

                    <Description icon='thumb' title='Free cancellation'>
                        Cancel for free up to 24 hours before your trip starts. Because life happens and it helps to be flexible when it does.
                    </Description>

                    <Description icon='customer_support' title='We’ve got your back'>
                        Rest easy knowing that everyone in the Turo community is pre-screened, and 24/7 customer support and roadside assistance are just a click away.
                    </Description>

                    <Description icon='insurance_options' title='Insurance options included'>
                        Drive confidently with your choice of protection plans. All plans include varying levels of liability insurance from Liberty Mutual provided through Turo Insurance Agency and physical damage protection.
                    </Description>

                    <UserMightLike />
                    <TopDestinations
                        navigation={navigation}
                        setSearchId={setSearchId}
                        loader={loader}
                        all_locationsError={all_locationsError}
                        topLocations={topLocations}
                        setSearchKeyWord={setSearchKeyWord}
                    />
                    <Image style={{ width: '100%' }} source={require('../../Assets/Icons/lineSeparator.png')} resizeMode='contain' />
                    <Text style={title}>
                        The car that pays for itself
                    </Text>
                    <Text style={description}>
                        Share your car, earn extra cash.
                    </Text>
                    <Text style={description}>
                        List it in just 10 minutes
                    </Text>

                    <CustomButton onPress={() => navigation.replace('Host')}>List your car</CustomButton>

                    <View style={{ margin: 20 }}></View>
                </ScrollView>
                {this.state.showBottomNavigator ? <BottomNavigator
                    navigation={navigation}
                    active='Search' /> : null}
            </View>
        )
    }
}


const mapStateToProps = state => {
    return {
        ...state.loader,
        ...state.search
    }
}

export default connect(mapStateToProps, { fetchTopLocations, searchKeyWord, setSearchId, setSearchKeyWord, setCredentials })(Search);