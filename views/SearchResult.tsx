import React from 'react';
import { View, Text, StyleSheet, Image,TextInput } from 'react-native';
import globalStyle from '../globalStyle';

export default class SearchResult extends React.Component { 
    constructor(props) { 
        super(props);
        this.state = {
            recommendSort: ''
        }
    }

    render(): React.ReactNode {
        return (
            <View>
                <View style={styles.header}>
                    <View style={[globalStyle.flexRow,globalStyle.aiCenter]}>
                        <Image source={require('../images/back_icon.png')} style={styles.backIcon} />
                        <View style={styles.searchContainer}>
                            <Image source={require('../images/search_icon.png')} style={styles.searchIcon} />
                            <TextInput placeholder="输入商品关键搜索词" placeholderTextColor={'#999999'} style={globalStyle.color_333} />
                        </View>
                        <Image source={require('../images/more_icon.png')} style={styles.moreIcon} />
                    </View>
                    <View style={ }>
                        <View>
                            <Text>推荐</Text>
                            {this.state.recommendSort === 'asc' ? <Image source={require('../images/arrow_up_icon.png')} /> : <Image source={require('../images/arrow_down_icon.png')} />}
                            <Image source={require('../images/arrow_down_icon.png')} />
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
        marginTop: 10,
        marginBottom: 10,
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
    }
});