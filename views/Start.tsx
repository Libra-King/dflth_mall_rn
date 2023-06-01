import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import globalStyle from '../globalStyle';

function Start(): JSX.Element { 
    return (
        <View style={styles.start}>
            <Image source={require('../images/start_page_bg.png')} style={[globalStyle.width100, globalStyle.height100]} />
            <View style={styles.container}>
                <Image source={require('../images/start_page_logo.png')} style={styles.logo} resizeMode='contain' />
                <View style={[globalStyle.flexRow,globalStyle.aiCenter,globalStyle.mb15]}>
                    <Text style={styles.title}>大风歌歌信息科技有限公司</Text>
                    <Image source={require('../images/ipv6_icon.png')} style={styles.ipvLogo} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    start: {
        width: '100%',
        height: '100%',
        position: 'relative'
    },

    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
    },

    logo: {
        width: '83%',
        marginTop: 100,
    },

    title: {
        fontSize: 12,
        fontFamily: 'Source Han Sans CN',
        color: '#DB0917'
    },

    ipvLogo: {
        width: 31,
        height: 12,
        marginLeft: 8,
    }
});

export default Start;