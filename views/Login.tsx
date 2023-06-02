import React from 'react';
import { View, Text, TextInput, Dimensions, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import globalStyle from '../globalStyle';
import HeaderNav from '../components/HeaderNav';

class Login extends React.Component {
    constructor(props: Record<any, any>) { 
        super(props);

        this.state = {
            isCheck: false as boolean,
        } as Record<any, any>;
    }

    render(): React.ReactNode {
        return (
            <View style={styles.login}>
                <HeaderNav navigation={this.props.navigation} rightTip="手机密码登录" />
                <View style={styles.container}>
                    <Text style={styles.tip}>登录后更精彩</Text>
                    <View style={styles.phone}>
                        <Text style={styles.telTip}>+86</Text>
                        <TextInput placeholder='输入手机号码' placeholderTextColor="#D2D2D2" style={styles.telInput} />
                    </View>
                    <View style={styles.code}>
                        <TextInput placeholder='输入验证码' placeholderTextColor="#D2D2D2" style={styles.codeInput} />
                        <Text style={styles.codeTip}>获取验证码</Text>
                    </View>
                    <TouchableWithoutFeedback onPress={() => { this.setState({ isCheck: !this.state.isCheck }) }}>
                        <View style={[globalStyle.flexRow, globalStyle.aiCenter,globalStyle.mt10]}>
                            {this.state.isCheck ? <Image source={require('../images/checked_icon.png')} style={styles.checkIcon} /> : <Image source={require('../images/no_check_icon.png')} style={styles.checkIcon} />}
                            <Text style={[globalStyle.font12, globalStyle.color_999,globalStyle.ml5]}>我已阅读并同意</Text>
                            <Text style={[globalStyle.font12, globalStyle.color_5c8acc]}>《用户协议》</Text>
                            <Text style={[globalStyle.font12, globalStyle.color_5c8acc]}>《隐私协议》</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <View style={styles.phoneLogin}>
                        <Image source={require('../images/phone_login_icon.png')} style={styles.phoneLoginIcon} />
                        <Text style={[globalStyle.font14,globalStyle.color_white,globalStyle.ml5]}>手机号登录</Text>
                    </View>
                    <View style={styles.line}></View>
                    <View style={styles.wechatLogin}>
                        <Image source={require('../images/wechat_login_icon.png')} style={styles.wechatLoginIcon} />
                        <Text style={[globalStyle.font14,globalStyle.color_white,globalStyle.ml5]}>微信登录</Text>
                    </View>
                    <View style={styles.iosLogin}>
                        <Image source={require('../images/ios_login_icon.png')} style={styles.iosLoginIcon} />
                        <Text style={[globalStyle.font14,globalStyle.color_a1a1a1,globalStyle.ml5]}>苹果登录</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    login: {
        width:  Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
    },

    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: Dimensions.get('screen').height - 50,
        backgroundColor: '#FFFFFF',
    },

    tip: {
        fontSize: 18,
        fontFamily: 'Source Han Sans CN',
        fontWeight: '500',
        color: '#333333',
        marginTop: 70,
    },

    phone: {    
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'flex-start',
        alignItems: 'center',
        width: '80%',
        borderBottomColor: '#F2F2F2',
        borderBottomWidth: 1,
        marginTop: 60,
    },

    telTip: {
        width: 60,
        fontSize: 18,
        fontFamily: 'Source Han Sans CN',
        fontWeight: '500',
        color: '#999999',
    },

    telInput: {
        width: Dimensions.get('screen').width * 0.8 - 60,
        color: '#333333'
    },

    code: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        borderBottomColor: '#F2F2F2',
        borderBottomWidth: 1,
        marginTop: 15
    },

    codeInput: {
        width: Dimensions.get('screen').width * 0.8 - 90,
        color: '#333333'
    },

    codeTip: {
        width: 80,
        fontSize: 14,
        fontFamily: 'Source Han Sans CN',
        color: '#5C8ACC',
        textAlign: 'right',
    },

    checkIcon: {
        width: 15,
        height: 15
    },

    phoneLogin: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '70%',
        height: 40,
        backgroundColor: '#E6E6E6',
        borderRadius: 20,
        marginTop: 30
    },

    phoneLoginIcon: {
        width: 20,
        height: 20
    },

    line: {
        width: 40,
        height: 2,
        backgroundColor: '#E5E5E5',
        marginTop: 50
    },

    wechatLogin: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '70%',
        height: 40,
        backgroundColor: '#49C43C',
        borderRadius: 20,
        marginTop: 30
    },

    wechatLoginIcon: {
        width: 30,
        height: 30
    },

    iosLogin: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '70%',
        height: 40,
        backgroundColor: '#F7F7F7',
        borderRadius: 20,
        borderColor: '#E5E5E5',
        borderWidth: 1,
        boxSizing: 'border-box',
        marginTop: 30
    },

    iosLoginIcon: {
        width: 30,
        height: 30
    }
});

export default Login;