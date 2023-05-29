import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, Dimensions, TouchableWithoutFeedback } from "react-native";
import globalStyle from "../globalStyle";

function HeaderNav(props:Record<any,any>): JSX.Element {
    const [screenWidth, setScreenWidth] = useState(0);

    useEffect(() => {
        setScreenWidth((Dimensions.get('screen').width - 140));
    }, []);

    const goBack = (): void => { 
        props.navigation.goBack();
    }

    return (
        <View style={styles.headerNav}>
            <TouchableWithoutFeedback onPress={goBack}>
                <Image source={require('../images/back_icon.png')} style={styles.backIcon} />
            </TouchableWithoutFeedback>
            <View style={styles.title} >
                <Text>{ props.title }</Text>
            </View>
            <View style={styles.rightPart}>
                <Text>管理</Text>
            </View>
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
        height: 50,
        backgroundColor: '#FFFFFF',
    },

    backIcon: {
        width: 25,
        height: 25,
        marginLeft: 10,
    },

    title: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 35,
    },

    rightPart: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: 50,
        marginRight: 15,
    }
});

export default HeaderNav;