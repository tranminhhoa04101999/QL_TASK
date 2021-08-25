import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerItem} from '@react-navigation/drawer';
import React from 'react';
// các màn hình
import Login from '../screens/LoginScreen';
import Trangchu from '../screens/trangchu';

const drawerTC = createDrawerNavigator();
const drawerMain = () => {
    return (
        <drawerTC.Navigator  >
            <drawerTC.Screen name="trangchu" component={Trangchu} options={{
                title: "Trang Chủ",
            }} />
            
        </drawerTC.Navigator>
    );
};


const stackMain = createStackNavigator();
const mainNavigator = () =>{
    return (
        <NavigationContainer>
            <stackMain.Navigator screenOptions= {{headerShown: false}}>
                <stackMain.Screen name="startscreens" component={Login}/>
                <stackMain.Screen name="drawer" component={drawerMain} options={{
                    headerShown: false,
                }}/>
            </stackMain.Navigator>
        </NavigationContainer>
    );
};

export default mainNavigator;