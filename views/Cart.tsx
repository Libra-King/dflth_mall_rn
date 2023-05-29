import React, { useEffect, useState } from 'react';
import { View, Text, Dimensions } from 'react-native';
import globalStyle from '../globalStyle';
import HeaderNav from '../components/HeaderNav';

function Cart({navigation}: Record<any, any>): JSX.Element {
    return (
        <View>
            <HeaderNav title="购物车" navigation={navigation} />
        </View>
    );
}

export default Cart;