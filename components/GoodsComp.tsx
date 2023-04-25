import React from "react";
import { Text, View, Image, StyleSheet, Dimensions } from "react-native";
import globalStyle from "../globalStyle";

class GoodsComp extends React.Component {
    constructor(props) {
        super(props);

        const screenWidth = (Dimensions.get('screen').width - 30) / 2;
        this.state = {
            screenWidth: screenWidth
        };
    }

    render() {
        return <View style={styles.goodsComp}>
            {this.props.hall.map((item, index) => {
                return <View key={index} style={globalStyle.width100}>
                    <View style={[globalStyle.ml10,globalStyle.mr10]}>
                        <Image source={{ uri: item.logo }} style={styles.logo} />
                    </View>
                    <View style={styles.goodsList}>
                        {item.goods.map((el, i) => { 
                            return <View key={i} style={[styles.goodsItem, i % 2 == 0 ? globalStyle.ml10 : globalStyle.mr10,i > 1 ? globalStyle.mt10 : null, {width: this.state.screenWidth}]}>
                                <Image source={{ uri: el.logo }} style={[styles.goodsImg,{width: this.state.screenWidth,height:this.state.screenWidth}]} />
                                <View style={styles.title}>
                                    <Text numberOfLines={2} ellipsizeMode='tail'>{el.title}</Text>
                                </View>
                                <View style={styles.priceStock}>
                                    <View style={styles.price}>
                                        <Text style={{ fontSize: 12, color: '#FF0000' }}>￥</Text>
                                        <Text style={{ fontSize: 16, color: '#FF0000' }}>{el.price}</Text>
                                    </View>
                                    <View style={globalStyle.mr5}>
                                        <Text>{el.sold > 0 ? '销售' + el.sold : '库存' + el.stock}件</Text>
                                    </View>
                                </View>
                            </View>
                        })}
                    </View>
                </View>
            })}
        </View>
    }
}

const styles = StyleSheet.create({
    goodsComp: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    logo: {
        width: '100%',
        height: 100,
        marginTop: 10
    },

    goodsList: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        width: '100%',
        marginTop: 20
    },

    goodsItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        boxShadow: '0px 1px 10px 0px #EFECEC',
        borderRadius: 10,
    },

    goodsImg: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },

    title: {
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        marginBottom: 20,
        fontSize: 12,
        fontFamily: 'Source Han Sans CN',
        color: '#333333',
    },

    priceStock: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: 20,
    },

    price: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'baseline',
        marginLeft: 5,
    }
});

export default GoodsComp;