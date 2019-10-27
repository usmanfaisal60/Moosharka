import React from 'react';
import {
    View,
    StatusBar,
    Keyboard,
    TouchableWithoutFeedback,
    StyleSheet,
    FlatList,
    Image
} from 'react-native';
import SeacrhHeader from './Helpers/SearchHeader';
import FullScreenModal from './Helpers/FullScreenModal'
import { clearKeyword, searchKeyWord, setSearchKeyWord } from '../../Redux/Actions';
import { connect } from 'react-redux';
import constants from '../../constants';
import CarCard from './Helpers/CarCard';

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

    // cardContainer: {
    //     width: (Dimensions.get('window').width) * 0.9,
    //     height: (Dimensions.get('window').height) * 0.45,
    //     marginTop: 15,
    //     marginBottom: 20
    // },

    // carImageContainer: {
    //     flex: 7,
    //     width: '100%',
    //     borderRadius: 4,
    //     overflow: 'hidden',
    // },

    // carTextContainer: {
    //     flex: 2,
    //     width: '100%',
    // },

    // carImageStyle: {
    //     width: '100%',
    //     height: '100%',
    // },

    // imageModal: {
    //     width: '100%',
    //     height: '100%',
    //     backgroundColor: '#0004',
    //     paddingVertical: 15,
    //     justifyContent: 'space-between'
    // },

    // nameContainer: {
    //     width: '100%',
    //     flex: 3,
    //     paddingLeft: 10,
    //     flexDirection: 'row',
    //     alignItems: 'center'
    // },

    // descriptionContainer: {
    //     width: '100%',
    //     flex: 2,
    //     paddingLeft: 10,
    //     flexDirection: 'row',
    //     alignItems: 'center'
    // },

    // bookButtonContainer: {
    //     flex: 2,
    //     width: '100%',
    //     justifyContent: 'center'
    // },

    // bookButton: {
    //     width: '40%',
    //     height: '90%',
    //     backgroundColor: '#ddd',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     borderRadius: 3,
    // },

    // topSheetContainer: {
    //     width: '100%',
    //     height: '20%',
    // },

    // bottomSheetContainer: {
    //     width: '100%',
    //     height: '20%',
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     alignItems: 'center',
    //     paddingRight: 15
    // },

    // priceContainer: {
    //     width: '35%',
    //     height: '100%',
    //     borderRadius: 4,
    //     backgroundColor: '#fff',
    //     justifyContent: 'center',
    //     alignItems: 'center'
    // },

    // distanceContainer: {
    //     width: '20%',
    //     height: '100%',
    //     backgroundColor: '#0009',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     borderTopRightRadius: 4,
    //     borderBottomRightRadius: 4
    // }

});

const mapStateToProps = state => {
    return {
        ...state.loader,
        ...state.search,
        ...state.login
    }
}

export default connect(mapStateToProps, { setSearchKeyWord, searchKeyWord, clearKeyword })(SearchResults);