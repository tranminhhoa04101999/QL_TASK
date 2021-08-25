import React, { useEffect ,useState,useCallback,useContext} from 'react';
import { View, StyleSheet, ActivityIndicator,TextInput,Text, Button,Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Color from '../constants/Colors';
import { loginStore } from '../App';
import { StackNavigationProp } from '@react-navigation/stack';
import { ParamListBase, useNavigation } from '@react-navigation/native';

const LoginScreen = (props: any) => {

    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [err,setErr] = useState('');
    const [isLoading,setIsLoading] = useState(Boolean);
    

    const loginSt = useContext(loginStore);

    const loginHandler = async () => {
        setIsLoading(true);
        setErr('');
        console.log("usern",username);
        console.log("pasw",password);

        try {
            await loginSt.login(username,password);
            var data = await loginSt.getUserDN();
            console.log("data",data);
            if(data.length === 0 || data === null)
            {
                console.log("dang nhap khong dung",data);
                Alert.alert('Error', 'Đăng nhập sai thông tin', [{ text: 'OK' }]);              
            }
            else
            {
                navigation.replace('drawer');
            }
        }
        catch (err) {
            setErr(err.message);
            console.log(err.message);
        }
        setIsLoading(false); 
    }

    return (
        <View style={styles.screen}>
            <View style={styles.input}>
                <TextInput style={styles.icon} editable= {false}><Icon name="user-alt" size={20}/></TextInput>
                <TextInput style={styles.textInput} autoCapitalize='none'
                            onChangeText={text => setUsername(text)} returnKeyType='go' placeholder="Tài khoản" />
            </View>

            <View style={styles.input}>
                <TextInput style={styles.icon} editable= {false}><Icon name="lock" size={20}/></TextInput>
                <TextInput style={styles.textInput} autoCapitalize='none'
                            onChangeText={text => setPassword(text)} returnKeyType='go' placeholder="mật khẩu" />
            </View>
            <View style={styles.buttons}>
                {isLoading ? <View><ActivityIndicator size='small' color={Color.deepPink}></ActivityIndicator></View> :
                    <Button title="Đăng Nhập" onPress={loginHandler} color= {Color.maucam}/>}
            </View>
        </View> 
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input:{
        borderBottomColor: "black",
        borderBottomWidth: 1,
        flexDirection: 'row',
        height: 70,
        marginBottom: 15,
    },
    textInput: {
        marginHorizontal: 5,
        width: '80%',
        height: '80%',
        fontSize: 20,
        
    },
    icon: {
        height: '80%'
    },
    buttons:{
        width: '80%',
        borderRadius: 25,
        overflow: 'hidden',
        marginTop: 15,
    }
});

export default LoginScreen;