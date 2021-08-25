import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerItem} from '@react-navigation/drawer';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Color from '../constants/Colors';

// các màn hình
import Login from '../screens/LoginScreen';
import Trangchu from '../screens/trangchu';
import CongviecScreen from '../screens/CongviecScreen';

const StackTrangChu = createStackNavigator();
const TrangChuNavigator = (props:any) => {
    return (
        <StackTrangChu.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: Color.maucam,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,

            },
            headerTitleStyle: {
                fontFamily: 'OpenSans-Bold'
            },
            headerTintColor: 'white',
            headerTitleAlign: 'center',
        }}>
            <StackTrangChu.Screen name="trangchu"  component ={Trangchu} options={{
                title :"Trang Chủ"
            }}/>

        </StackTrangChu.Navigator>
    );
};

const StackCongviec = createStackNavigator();
const CongviecNavigator = (props:any) => {
    return (
        <StackCongviec.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: Color.maucam,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,

            },
            headerTitleStyle: {
                fontFamily: 'OpenSans-Bold'
            },
            headerTintColor: 'white',
            headerTitleAlign: 'center',
        }}>
            <StackCongviec.Screen name="congviec"  component ={CongviecScreen} options={{
                title: "Công Việc"
            }} />

        </StackCongviec.Navigator>
    );
};


const Drawer = createDrawerNavigator();
const drawerMain = () => {
    return (
        <Drawer.Navigator drawerType='slide' >
            <Drawer.Screen name="trangchustack" component={TrangChuNavigator} options={{
                title: "Trang Chủ",
                drawerIcon: ({focused, size}) => (
                    <Icon
                       name="home"
                       size={23}
                       color={focused ? '#7cc' : '#ccc'}
                    />
                 ),
            }} />
            <Drawer.Screen name="congviecstack" component={CongviecNavigator} options={{
                title: "Công Việc",
                drawerIcon: ({focused, size}) => (
                    <Icon
                       name="clipboard"
                       size={23}
                       color={focused ? '#7cc' : '#ccc'}
                    />
                 ),
            }} />
        </Drawer.Navigator>
    );
};


const stackMain = createStackNavigator();
const mainNavigator = () =>{
    return (
        <NavigationContainer>
            <stackMain.Navigator>
                <stackMain.Screen name="drawer" component={drawerMain} options={{
                    headerShown:false,
                }}/>
                <stackMain.Screen name="startscreens" component={Login} options={{headerShown: false}}/>
            </stackMain.Navigator>
        </NavigationContainer>
    );
};

export default mainNavigator;