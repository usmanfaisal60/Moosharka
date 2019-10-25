import React from 'react';
import {
    View,
    StatusBar,
    ImageBackground,
    Text, Keyboard,
    TouchableOpacity,
    TouchableNativeFeedback,
    TouchableWithoutFeedback,
    StyleSheet,
    FlatList,
    Platform,
    Dimensions,
    Image
} from 'react-native';
import SeacrhHeader from './Helpers/SearchHeader';
import FullScreenModal from './Helpers/FullScreenModal'
import { clearKeyword, searchKeyWord, setSearchKeyWord } from '../../Redux/Actions';
import { connect } from 'react-redux';
import constants from '../../constants';

class SearchResults extends React.Component {

    state = {
        expanded: false
    }

    componentDidMount() {
        const {
            keyword,
            searchKeyWord
        } = this.props;

        searchKeyWord(keyword);
    }

    componentWillUnmount() {
        this.props.clearKeyword();
    }

    static renderStars(rating) {
        let toReturn = [];
        let index = rating * 2;
        for (let i = 0; i < 10; i++) {
            if (i % 2 === 1) {
                if (i < index) toReturn.push(<Image key={i}
                    source={require('../../Assets/Icons/star_filled.png')}
                    style={{ width: 15, height: 15 }} />)
                else if (i === index) toReturn.push(<Image key={i}
                    source={require('../../Assets/Icons/star_half_filled.png')}
                    style={{ width: 15, height: 15 }} />)
                else if (i > index) toReturn.push(<Image key={i}
                    source={require('../../Assets/Icons/star_hollow.png')}
                    style={{ width: 15, height: 15 }} />)
            }
        }
        return toReturn;
    }

    render() {
        const {
            container,
            touchableModal,
            flatListContainer
        } = Styles;

        const {
            keyword,
            setSearchKeyWord,
            navigation,
            loader,
            searchResults,
            loginStatus
        } = this.props;

        return (
            <View style={container}>
                <StatusBar barStyle='light-content' backgroundColor='#222' />
                <SeacrhHeader
                    onChangeText={setSearchKeyWord}
                    expanded={this.state.expanded}
                    onTextTouch={() => this.setState({ expanded: true })}
                    onPressLeft={() => navigation.goBack()}
                    keyword={keyword} />
                {loader ?
                    <FullScreenModal loader />
                    :
                    null}
                {searchResults ?
                    <View style={flatListContainer}>
                        <FlatList showsVerticalScrollIndicator={false}
                            data={searchResults}
                            renderItem={({ item }) => <CarCard onPress={() => { if (!loginStatus) navigation.navigate('LoginOrSignUp', { backKey: 'SearchResults' }) }}
                                car={item} />}
                            keyExtractor={item => `${item.id}`}
                        />
                    </View>
                    :
                    null}
                {this.state.expanded ?
                    <TouchableWithoutFeedback style={touchableModal}
                        onPress={() => {
                            this.setState({ expanded: false });
                            Keyboard.dismiss();
                        }}>
                        <View style={touchableModal}>
                            <FullScreenModal />
                        </View>
                    </TouchableWithoutFeedback>
                    :
                    null
                }
            </View>
        );
    }
};

const Styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },

    touchableModal: {
        width: '100%',
        height: '100%',
        backgroundColor: '#0005',
        position: 'absolute',
        zIndex: 4
    },

    flatListContainer: {
        width: '100%',
        height: '100%',
        paddingTop: constants.headerHeight,
        alignItems: 'center',
    },

    cardContainer: {
        width: (Dimensions.get('window').width) * 0.9,
        height: (Dimensions.get('window').height) * 0.45,
        marginTop: 15,
        marginBottom: 20
    },

    carImageContainer: {
        flex: 7,
        width: '100%',
        borderRadius: 4,
        overflow: 'hidden',
    },

    carTextContainer: {
        flex: 2,
        width: '100%',
    },

    carImageStyle: {
        width: '100%',
        height: '100%',
    },

    imageModal: {
        width: '100%',
        height: '100%',
        backgroundColor: '#0004',
        paddingVertical: 15,
        justifyContent: 'space-between'
    },

    nameContainer: {
        width: '100%',
        flex: 3,
        paddingLeft: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },

    descriptionContainer: {
        width: '100%',
        flex: 2,
        paddingLeft: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },

    bookButtonContainer: {
        flex: 2,
        width: '100%',
        justifyContent: 'center'
    },

    bookButton: {
        width: '40%',
        height: '90%',
        backgroundColor: '#ddd',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
    },

    topSheetContainer: {
        width: '100%',
        height: '20%',
    },

    bottomSheetContainer: {
        width: '100%',
        height: '20%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: 15
    },

    priceContainer: {
        width: '35%',
        height: '100%',
        borderRadius: 4,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },

    distanceContainer: {
        width: '20%',
        height: '100%',
        backgroundColor: '#0009',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4
    }

});

const mapStateToProps = state => {
    return {
        ...state.loader,
        ...state.search,
        ...state.login
    }
}

export default connect(mapStateToProps, { setSearchKeyWord, searchKeyWord, clearKeyword })(SearchResults);

const CarCard = props => {

    const {
        cardContainer,
        carTextContainer,
        carImageContainer,
        carImageStyle,
        imageModal,
        descriptionContainer,
        nameContainer,
        bookButtonContainer,
        bookButton,
        topSheetContainer,
        bottomSheetContainer,
        priceContainer,
        distanceContainer
    } = Styles;

    const {
        car_imageUrl,
        car_name,
        year,
        rating,
        trips,
        price,
        distance
    } = props.car;

    return (
        <View style={cardContainer}>
            <View style={carImageContainer}>
                <ImageBackground
                    style={carImageStyle}
                    source={{ uri: car_imageUrl }}
                    resizeMode='cover'>
                    <View style={imageModal}>
                        <View style={topSheetContainer}>

                        </View>
                        <View style={bottomSheetContainer}>
                            <View style={distanceContainer}>
                                <Text style={{ color: '#fff' }}>{distance}</Text>
                            </View>
                            <View style={priceContainer}>
                                <Text>{price}</Text>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </View>
            <View style={carTextContainer}>
                <View style={nameContainer}>
                    <Text style={{ fontSize: 15 }}>{car_name}</Text>
                    <Text style={{ fontSize: 12, paddingLeft: 10, color: '#555' }}>{year}</Text>
                </View>
                <View style={descriptionContainer}>
                    {SearchResults.renderStars(rating)}
                    <Text style={{ color: '#555', fontSize: 10, paddingLeft: 10 }}>{trips} Trips</Text>
                </View>
            </View>
            <View style={bookButtonContainer}>
                {Platform.OS === 'android' ?
                    <TouchableNativeFeedback onPress={props.onPress}>
                        <View style={bookButton}>
                            <Text>Book instantly</Text>
                        </View>
                    </TouchableNativeFeedback>
                    :
                    <TouchableOpacity onPress={props.onPress}>
                        <View style={bookButton}>
                            <Text>Book instantly</Text>
                        </View>
                    </TouchableOpacity>
                }
            </View>
        </View>
    )
}