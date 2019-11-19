import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomHeader from './Helpers/CustomHeader';
import constants from '../../constants';
import { FlatList } from 'react-native-gesture-handler';


class LikedCars extends React.Component {
    render() {

        const {
            container,
            bodyContainer
        } = Styles;

        const {
            navigation
        } = this.props;

        return (
            <View style={container}>
                <CustomHeader backbutton onPressLeft={() => navigation.goBack()}>Liked Cars</CustomHeader>
                <View style={bodyContainer}>
                    <View style={container}>
                        <FlatList />
                    </View>
                </View>
            </View>
        )
    }
}

const Styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%'
    },

    bodyContainer: {
        width: '100%',
        height: '100%',
        paddingTop: constants.headerHeight,
    }
});

export default LikedCars;