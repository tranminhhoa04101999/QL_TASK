import AsyncStorage from '@react-native-async-storage/async-storage';
import { autoSubscribe, AutoSubscribeStore, StoreBase } from 'resub';
import axios from 'axios';
import { LINKBASE } from '../App';
@AutoSubscribeStore
class loginRS extends StoreBase {
    public user: any = null;
    
    @autoSubscribe
    setUser(user:any){
        this.user = user;
    }
    
    @autoSubscribe
    getUserDN(){
        return this.user;
    }

    async login(username: string, password: string) {
        let link = LINKBASE + "/Users/login";
        await axios({
            method: 'POST',
            url: link,
            params: {
              username: username,
              password: password
            }
          }).then(res =>{ 
            this.user = res.data;
          }).catch((err)=>{
            console.log("Api call error");
            console.log(err);
          });
        this.trigger();
    };
    

}

export default loginRS;