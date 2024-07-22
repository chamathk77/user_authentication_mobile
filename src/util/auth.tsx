import axios from 'axios';
import { Alert } from 'react-native';

const Api_key = 'AIzaSyCLgxneghZKFCcdIDeXm_RxlxbddV8N1Xc'


export async function create_user(email: any, password: any) {




    console.log("entered create user function----------------------->>>>>>>>>>>>>")
    console.log("email-> " + email + " \npassword ->" + password)
    const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + Api_key, {
        email: email,
        password: password,
        returnSecureToken: true
    });
    console.log("done create user function----------------------->>>>>>>>>>>>>", response.data)

    return response;



}


export async function Sign_In(email: string, password: string) {



    console.log("entered Sign_In user function----------------------->>>>>>>>>>>>>")

    console.log("email-> " + email + " \npassword ->" + password)

    const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + Api_key, {
        email: email,
        password: password,
        returnSecureToken: true
    });

    console.log("done Sign_In user function--------------------------->>>>>>>>>>>>>", response.data)

    const token = response.data.idToken
    return token


}

