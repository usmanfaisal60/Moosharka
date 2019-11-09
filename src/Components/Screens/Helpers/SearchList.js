import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import constants from '../../../constants';

const SearchList = props => {

    const {
        container,
        availableContainer,
        titleContainer
    } = Styles;

    const {
        list,
        keyword,
        onPress,
        setSearchKeyWord
    } = props;


    let filtered = [
        {
            id: -1,
            title: 'All cities'
        }
    ];

    list.forEach(element => {
        if (keyword) {
            if (element.title.includes(keyword)) filtered.push(element);
        } else {
            filtered.push(element);
        }
    });

    return (
        <View style={container}>
            <View style={availableContainer}>
                <Text style={{ fontSize: 20 }}>Available Cities</Text>
            </View>
            <FlatList
                data={filtered}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        style={{ flex: 1 }}
                        onPress={() => {
                            onPress(item.id);
                            setSearchKeyWord(item.title);
                        }}>
                        <View style={{ ...titleContainer, marginBottom: index === filtered.length - 1 ? 30 : 0 }}>
                            <Text>{item.title}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={item => `${item.id}`} />
        </View>
    )
};

const Styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        paddingTop: constants.headerHeight
    },

    availableContainer: {
        width: '100%',
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        backgroundColor: '#eee9',
        borderBottomColor: '#ddd'
    },

    titleContainer: {
        width: '100%',
        height: 60,
        justifyContent: 'center',
        paddingLeft: 10,
        borderBottomColor: '#eee',
        borderBottomWidth: 1
    }
});

export default SearchList;