import React, { useEffect ,useState,useCallback} from 'react';
import { View, StyleSheet, ActivityIndicator,TextInput,Text, Button,FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Color from '../constants/Colors';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';  





const trangchu = (props:any) => {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () =>
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item iconName="menu" title="Menu" onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} />
                </HeaderButtons>
        });
    }, []);

    return <View>
        <Text>Hi</Text>
    </View>
}

export default trangchu;