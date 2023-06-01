import React, { useEffect,useState } from "react";
import { StyleSheet, View, Text, Image, Alert, ScrollView, Dimensions, TouchableWithoutFeedback } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { doRequest } from "../utils/request";
import globalStyle from "../globalStyle";
import Swiper from 'react-native-swiper';
import GoodsComp from "../components/GoodsComp";

function Home({ navigation }: Record<any,any>): JSX.Element {
    const [banner, setBanner] = useState([] as Array<any>);
    const [hall, setHall] = useState([] as Array<any>);
    const [menu, setMenu] = useState([] as Array<any>);
    const [screenWidth, setScreenWidth] = useState(0);

    useEffect(() => { 
        setScreenWidth((Dimensions.get('screen').width - 30) / 2);
        getOriginData();
        getConfig();
    }, []);

    const getOriginData = (): void => {
        let path = 'api/mall.index/index';
        
        doRequest(path, {}, 1).then((res) => { 
            let {
				errcode,
				status,
				msg,
				data
            } = res;

            if (errcode !== 0 || status !== 1) {
                Alert.alert('提示', msg);
                return;
            }

            let { banner, hall, menu } = data;
            
            setBanner(banner);
            setHall(hall);
            setMenu(menu);
        })
    }

    const getConfig = (): void => { 
        let path = 'api/mall.mall/index';

        doRequest(path, {}, 1).then((res) => {
            let {
                errcode,
                status,
                msg,
                data
            } = res;

            if (errcode !== 0 || status !== 1) {
                Alert.alert('提示', msg);
                return;
            }

            let { search, category } = data;
            AsyncStorage.setItem('search', JSON.stringify(search));
            AsyncStorage.setItem('category', JSON.stringify(category));
         });
    }

    return (
      <ScrollView style={[styles.homePage,{height:'100%'}]}>
            <View style={styles.header}>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Search')}>
                <View style={styles.searchBox} >
                    <Image source={require('../images/search_icon.png')} style={styles.searchIcon} />
                    <Text>输入商品关键搜索词</Text>
                </View>
            </TouchableWithoutFeedback>
            <View style={styles.rightBtn}>
                <Image source={require('../images/category_icon.png')} style={styles.cateIcon} />
                <Image source={require('../images/more_icon.png')} style={styles.moreIcon} />
            </View>
        </View>
        
        <View style={styles.swiperContainer}>
            <Swiper>
                {banner.map((item, index) => {
                    return <View key={index} style={styles.swiperItem}>
                        <Image source={{uri: item.logo}} style={{width: '100%', height: 200}} />
                    </View>
                })}        
            </Swiper>
        </View>
        
        <View style={styles.diamondRegion}>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('WebviewContainer')}>
                <View style={[styles.diamondItem,globalStyle.ml30]}>
                    <Image source={require('../images/diamond_region_announcement_icon.png')} style={styles.diamondIcon} />
                    <Text style={globalStyle.mt5}>公告</Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('WebviewContainer')}>
                <View style={styles.diamondItem}>
                    <Image source={require('../images/diamond_region_sales_policy_icon.png')} style={styles.diamondIcon} />
                    <Text style={globalStyle.mt5}>销售政策</Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('WebviewContainer')}>
                <View style={styles.diamondItem}>
                    <Image source={require('../images/diamond_region_logistics_icon.png')} style={styles.diamondIcon} />
                    <Text style={globalStyle.mt5}>物流</Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Cart')}>
                <View style={[styles.diamondItem,globalStyle.mr30]}>
                    <Image source={require('../images/diamond_region_cart_icon.png')} style={styles.diamondIcon} />
                    <Text style={globalStyle.mt5}>购物车</Text>
                </View>
            </TouchableWithoutFeedback>        
        </View>
        
        <View style={styles.menuBox}>
            {menu.map((item, index) => {
                return <View key={index} style={[index % 2 === 1 ? globalStyle.mr10 : globalStyle.ml10,globalStyle.mt10,{width: screenWidth}]}>
                    <Image source={{uri: item.logo}} style={{width:'100%', height: 60}} />
                </View>
            })}
        </View>
        
        <View style={{marginBottom: 50}}>
            <GoodsComp hall={hall} />
        </View>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
    homePage: {
        width: '100%',
        backgroundColor: '#F2F2F2',
    },

    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#FFFFFF',
        boxShadow: '0px 1px 3px 0px #F2F2F2'
    },

    searchBox: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height:40,
        fontSize: 14,
        fontFamily: 'Source Han Sans CN',
        color: '#999999',
        backgroundColor: '#F2F2F2',
        border: '1px solid #EEEEEE',
        boxShadow: '0px 1px 3px 0px #F2F2F2',
        boxSize: 'border-box',
        borderRadius: 20,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        width: '72%',
    },

    searchIcon: {
        width: 30,
        height: 30,
        marginLeft: 10,
        marginRight:5
    },

    rightBtn: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '20%',
        height: 40,
        border: '1px solid #EEEEEE',
        boxShadow: '0px 1px 3px 0px #F2F2F2',
        boxSize: 'border-box',
        borderRadius: 20,
        marginRight:10
    },

    cateIcon: {
        width: 25,
        height: 25,
        marginLeft:10
    },

    moreIcon: {
        width: 25,
        height: 25,
        marginRight:10
    },

    swiperContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: 210
    },

    swiperItem: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
    },

    diamondRegion: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        border: '1px solid #EEEEEE',
        boxShadow: '0px 1px 3px 0px #F2F2F2',
        boxSize: 'border-box',
        borderRadius: 10,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
    },

    diamondItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 10,
        fontFamily: 'Source Han Sans CN',
        color: '#333333',
        marginTop: 10,
        marginBottom: 10,
    },

    diamondIcon: {
        width: 40,
        height: 40
    },

    menuBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginTop: 10,
    }
});
  
export default Home;