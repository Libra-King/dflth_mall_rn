import React from 'react';
import { Text, View, Image, StyleSheet, Dimensions, TextInput, Alert ,TouchableWithoutFeedback} from 'react-native';
import globalStyle from '../globalStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Search extends React.Component {
    constructor(props) { 
        super(props);
        this.state = {
            searchList: [] as Array<any>,
            isSpot: false,
        }
    }
    
    componentDidMount(): void {
        AsyncStorage.getItem('search').then((res) => {
            if (res) {
                this.setState({
                    searchList: JSON.parse(res)
                });
            }
         })
    }

    render(): React.ReactNode {
        return (
            <View style={styles.searchPage}>
                <View style={styles.hearder}>
                    <View style={styles.search}>
                        <Image source={require('../images/search_icon.png')} style={styles.searchIcon} />
                        <TextInput placeholder="输入商品关键搜索词" placeholderTextColor={'#999999'} style={globalStyle.color_333} />
                    </View>
                    <Text style={[globalStyle.mr15,globalStyle.color_333]} onPress={() => this.props.navigation.goBack()}>取消</Text>
                </View>
                <View style={globalStyle.mt20}>
                    <View style={[globalStyle.flexRow,globalStyle.aiCenter]}>
                        <View style={[styles.line,{backgroundColor: '#EEB11D'}]}></View>
                        <Text style={styles.tip}>搜索范围</Text>
                    </View>
                    <TouchableWithoutFeedback onPress={() => this.setState({isSpot: !this.state.isSpot})}>
                        <View style={[globalStyle.flexRow,globalStyle.aiCenter,globalStyle.mt15]}>
                            {this.state.isSpot ? <Image source={require('../images/checked_icon.png')} style={styles.checkIcon} /> : <Image source={require('../images/no_check_icon.png')} style={styles.checkIcon} />}
                            <Text style={[globalStyle.color_666,globalStyle.font14,globalStyle.ml5]}>只看现货</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                {this.state.searchList.map((item, index) => {
                    return (
                        <View key={index} style={globalStyle.mt20}>
                            <View style={[globalStyle.flexRow, globalStyle.aiCenter, globalStyle.mb10]}>
                                <View style={styles.line}></View>
                                <Text>{item.name}</Text>
                            </View>
                            <View style={[styles.list]}>
                                {item.list.map((el, i) => {
                                    return (
                                        <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('SearchResult')}>
                                            <View key={i} style={styles.cateItem}>
                                                <Text style={[globalStyle.font12, globalStyle.color_666]}>{el.name}</Text>
                                                {el.hot === 1 ? <View style={styles.hot}>
                                                    <Text style={[globalStyle.font10, globalStyle.color_white]}>热</Text>
                                                </View> : null}
                                            </View>
                                        </TouchableWithoutFeedback>
                                    );
                                })}
                            </View>
                        </View>
                    );
                })}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    searchPage: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
        backgroundColor: '#FFFFFF',
    },

    hearder: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: 14,
        marginTop: 10,
        marginBottom: 10
    },

    search: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '82%',
        height: 40,
        backgroundColor: '#F2F2F2',
        borderRadius: 20,
        boxSize: 'border-box',
        marginLeft: 10,
    },

    searchIcon: {
        width: 30,
        height: 30,
        marginLeft: 10,
    },

    line: {
        width: 4,
        height: 18,
        backgroundColor: '#D50000',
        borderRadius: 2,
        marginLeft: 20,
        marginRight: 10
    },

    tip: {
        fontSize: 14,
        fontFamily: 'Source Han Sans CN',
        fontWeight: '500',
        color:'#333333'
    },

    checkIcon: {
        width: 20,
        height: 20,
        marginLeft: 34
    },

    list: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginLeft: 20,
        marginRight: 20,
    },

    cateItem: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: 50,
        height: 30,
        backgroundColor: '#F2F2F2',
        borderRadius: 15,
        marginTop: 10,
        fontFamily: 'Source Han Sans CN',
        paddingLeft: 10,
        paddingRight: 10,
        marginLeft: 10,
    },

    hot: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: 15,
        height: 15,
        backgroundColor: '#D50000',
        borderRadius: 3,
        marginLeft: 5,
    }
});

export default Search;