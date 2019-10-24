import React from 'react';
import { View, StatusBar, Text, Keyboard, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import SeacrhHeader from './Helpers/SearchHeader';
import FullScreenModal from './Helpers/FullScreenModal'
import { searchKeyWord, setSearchKeyWord } from '../../Redux/Actions';
import { connect } from 'react-redux';

class SeachResults extends React.Component {

    state = {
        expanded: false
    }

    render() {
        const {
            container,
            touchableModal
        } = Styles;

        const {
            keyword,
            setSearchKeyWord,
            navigation
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
                {this.state.expanded ?
                    <TouchableWithoutFeedback
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
        height: '100%'
    },

    touchableModal: {
        width: '100%',
        flex: 1
    }
});

const mapStateToProps = state => {
    return {
        ...state.loader,
        ...state.search
    }
}

export default connect(mapStateToProps, { setSearchKeyWord })(SeachResults);