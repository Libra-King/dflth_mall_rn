import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, Dimensions, TouchableWithoutFeedback } from "react-native";
import globalStyle from "../globalStyle";

function HeaderNav(props:Record<any,any>): JSX.Element {
    const [screenWidth, setScreenWidth] = useState(0);

    useEffect(() => {
        setScreenWidth((Dimensions.get('screen').width - 230));
    }, []);

    const goBack = (): void => { 
        props.navigation.goBack();
    }

    return (
        <View style={styles.headerNav}>
            <TouchableWithoutFeedback onPress={goBack}>
                <View style={styles.leftPart}>
                    <Image source={require('../images/back_icon.png')} style={styles.backIcon} />
                </View>
            </TouchableWithoutFeedback>
            <View style={[styles.title,{ width: screenWidth }]} >
                <Text>{ props.title }</Text>
            </View>
            <TouchableWithoutFeedback onPress={props.changeTip}>
                <View style={styles.rightPart}>
                    <Text>{ props.rightTip }</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    headerNav: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: 40,
        backgroundColor: '#FFFFFF',
    },

    leftPart: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: 100,
        marginLeft: 10,
    },

    backIcon: {
        width: 25,
        height: 25,
    },

    title: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    rightPart: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: 100,
        marginRight: 10,
    }
});

export default HeaderNav;