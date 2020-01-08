import React from 'react';
import { Animated, StyleSheet, View, TouchableWithoutFeedback, Dimensions } from 'react-native';
import Aux from '../../HOC/Auxiliary';

class SlideUpAnimated extends React.Component {

    constructor(props) {
        super(props);
        this.bottom = props.height ? -props.height : - (Dimensions.get('window').height * 0.7);
        this.opacity = 0;
        this.duration = props.duration ? props.duration : 1000;
    }

    state = {
        hide: false,
        shown: false
    }

    slideUp = () => {
        this.opacity = new Animated.Value(0);
        this.bottom = new Animated.Value(this.bottom);
        Animated.parallel([
            Animated.timing(this.opacity, {
                toValue: 0.5,
                duration: this.duration
            }),
            Animated.timing(this.bottom, {
                toValue: 0,
                duration: this.duration
            })
        ]).start(() => this.setState({ shown: true }));

    }

    slideDown = () => {
        this.opacity = new Animated.Value(0.5);
        this.bottom = new Animated.Value(0);
        Animated.parallel([
            Animated.timing(this.opacity, {
                toValue: 0,
                duration: this.duration
            }),
            Animated.timing(this.bottom, {
                toValue: this.props.height ? -this.props.height : -500,
                duration: this.duration
            })
        ]).start(() => {
            this.props.onHide();
        });
    }
    render() {
        const {
            absolute,
            modal
        } = Styles;
        const {
            height,
            show
        } = this.props;

        if (show && !this.state.shown) this.slideUp();
        if (this.state.hide) this.slideDown();
        if (show) return (
            <Aux>
                <Animated.View style={[modal, { opacity: this.opacity }]}>
                    <TouchableWithoutFeedback
                        onPress={() => this.setState({ hide: true })}
                        style={{ flex: 1 }}>
                        <View style={{ flex: 1 }}></View>
                    </TouchableWithoutFeedback>
                </Animated.View>
                <Animated.View style={[absolute, { height: height ? height : 500, bottom: this.bottom }]}>
                    {this.props.children}
                </Animated.View>
            </Aux>
        )
        else return null;
    }
}


const Styles = StyleSheet.create({
    absolute: {
        position: 'absolute',
        width: '100%',
        backgroundColor: '#fff',
        elevation: 5,
        borderTopEndRadius: 10,
        borderTopStartRadius: 10,
        overflow: 'hidden'
    },
    modal: {
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '100%',
        elevation: 5,
        backgroundColor: '#000',
    }
});

export default SlideUpAnimated;