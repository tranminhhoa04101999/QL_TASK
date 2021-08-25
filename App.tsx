//#region import thu vien
import React from 'react';
import { } from 'react-native';

import TaskNavigation from "./navigations/TaskNavigation";
//#endregion
import { createContext } from 'react';
import loginRS from './Resub/loginRS';

//

export const LINKBASE = "http://192.168.1.7:8089";

const loginResubC = new loginRS();
export const loginStore = createContext(loginResubC);

export default function App(){
    return (
        <loginStore.Provider value={loginResubC}>
            <TaskNavigation />
        </loginStore.Provider>
    );
};