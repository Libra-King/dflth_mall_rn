import React, { useEffect, useState } from 'react';
import { View, Text, Dimensions, StyleSheet, Alert } from 'react-native';
import { doRequest } from '../utils/request';
import globalStyle from '../globalStyle';
import HeaderNav from '../components/HeaderNav';

function Cart({ navigation }: Record<any, any>): JSX.Element {
    const [cartList, setCartList] = useState<Array<Record<any, any>>>([]);
    const [page, setPage] = useState(1);

    useEffect(() => { 
        getCartList();
    }, []);

    const getCartList = () => { 
        let path = 'api/mall.order/cartGoods';
        let params = {
            page,
        };

        doRequest(path, params, 1).then((res) => { 
            let {
                errcode,
                status,
                msg,
                data
            } = res;

            if (errcode !== 0 || status !== 1) {
                if (errcode === 99) { 
                    navigation.navigate('Login');
                    return;
                }

                Alert.alert('提示', msg + errcode);
                return;
            }

            let { list } = data;
            setCartList(list);
        })
    }

    return (
        <View style={styles.cart}>
            <HeaderNav title="购物车" navigation={navigation} />
            <View>
                {}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cart: {
        width: '100%',
        minHeight: Dimensions.get('screen').height,
        backgroundColor: '#F2F2F2'
    }
});

export default Cart;