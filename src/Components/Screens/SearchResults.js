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
import SelectionMenu from './Helpers/SelectionMenu';

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
                            renderItem={({ item, index }) => <CarCard lastItem={(index + 1) === searchResults.length} onPress={() => { if (!loginStatus) navigation.navigate('LoginOrSignUp', { backKey: 'SearchResults' }) }}
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
                    null}
                {!this.state.expanded && searchResults ?
                    <SelectionMenu leftText='Maps' onPressLeft={() => navigation.navigate('MapsResults')}/>
                    : null}
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