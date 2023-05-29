import React from 'react';
import { View, Text, StyleSheet, Image,TextInput } from 'react-native';
import globalStyle from '../globalStyle';

export default class SearchResult extends React.Component { 
    constructor(props) { 
        super(props);
        this.state = {
            tj: '',
            xl: '',
            jg: '',
        }
    }

    render(): React.ReactNode {
        return (
            <View>
                <View style={styles.header}>
                    <View style={[globalStyle.flexRow,globalStyle.aiCenter,globalStyle.mt10]}>
                        <Image source={require('../images/back_icon.png')} style={styles.backIcon} />
                        <View style={styles.searchContainer}>
                            <Image source={require('../images/search_icon.png')} style={styles.searchIcon} />
                            <TextInput placeholder="输入商品关键搜索词" placeholderTextColor={'#999999'} style={globalStyle.color_333} />
                        </View>
                        <Image source={require('../images/more_icon.png')} style={styles.moreIcon} />
                    </View>
                    <View style={styles.tabs}>
                        <View style={styles.tabItem}>
                            <Text>推荐</Text>
                            {this.state.tj === 'asc' ? <Image source={require('../images/search_arrow_up_icon.png')} style={styles.arrowIcon} /> : <Image source={require('../images/search_arrow_down_icon.png')} style={styles.arrowIcon} />}
                        </View>
                        <View style={styles.tabItem}>
                            <Text>销量</Text>
                            {this.state.xl === 'asc' ? <Image source={require('../images/search_arrow_up_icon.png')} style={styles.arrowIcon} /> : <Image source={require('../images/search_arrow_down_icon.png')} style={styles.arrowIcon} />}
                        </View>
                        <View style={styles.tabItem}>
                            <Text>价格</Text>
                            {this.state.jg === 'asc' ? <Image source={require('../images/search_arrow_up_icon.png')} style={styles.arrowIcon} /> : <Image source={require('../images/search_arrow_down_icon.png')} style={styles.arrowIcon} />}
                        </View>
                        <View style={styles.tabItem}>
                            <Text>筛选</Text>
                            <Image source={require('../images/search_filter_icon.png')} style={styles.filterIcon} />
                        </View>
                    </View>
                    <View style={styles.cateContainer}>
                        <View style={[globalStyle.pos_relative,globalStyle.ml15]}>
                            {/* <Image source={require('../images/search_cate_item_active_bg.png')} style={{width: '100%'}} /> */}
                            <Image source={require('../images/search_cate_item_bg.png')} style={styles.cateBg} resizeMode='contain' />
                            <View style={styles.cateItem}>
                                <Text style={[globalStyle.font12]}>客厅家具</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        backgroundColor: 'white',
        boxShadow: '-2px 0px 9px 0px #EFECEC',
    },

    backIcon: {
        width: 25,
        height: 25,
        marginLeft: 10,
    },

    searchContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '73%',
        height: 40,
        backgroundColor: '#F2F2F2',
        border: '1px solid #EEEEEE',
        boxSize: 'border-box',
        boxShadow: '0px 1px 3px 0px #F2F2F2',
        borderRadius: 20,
        marginLeft: 10,
    },

    searchIcon: {
        width: 30,
        height: 30,
        marginLeft: 10,
    },

    moreIcon: {
        width: 25,
        height: 25,
        marginRight: 10,
        marginLeft: 20,
    },

    tabs: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
    },

    tabItem: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },

    arrowIcon: {
        width: 20,
        height: 20
    },

    filterIcon: {
        width: 20,
        height: 20,
    },

    cateContainer: {
        width: '100%',
        boxShadow: '-2px 0px 9px 0px #EFECEC'
    },

    cateBg: {
        width: '20%',
        height: 40,
        boxSize: 'border-box',
    },

    cateItem: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '20%',
        height: 40,
        position: 'absolute',
        boxSize: 'border-box',
    }
});