import React, {useState, useEffect}  from 'react';
import Cookies from 'js-cookie';

const BACKEND_URL = "https://localhost:5000/api/v1"

async function getLoginStatus() {
    return fetch(BACKEND_URL + "/user/", {        
                    credentials: 'include',
                    method: "GET",
                    headers: {
                        Cookie: "store=" + Cookies.get('store')
                    }
                })
}

export default function LoginBox(props) {
    const [loginStatus, setLoginStatus] = useState('not yet logged');
    useEffect(() => {
        getLoginStatus().then((response) => {
            if(response.ok){
                response.json().then(
                    (data) => setLoginStatus("Logged in as: " + data["user"] + "."))
            }
            else
                setLoginStatus("Plese login to see resources.")  
        })
    }, [])
    // var status = getLoginStatus()
    // console.log('status:=', status.then(value => value["user-id"]))

    // setLoginStatus(() => {getLoginStatus()})
    return (
        <div>
            <div className='LoginBox'>
                {loginStatus}<br/>
                Login via <br/>
                <a href={BACKEND_URL + "/login/google"}>Google</a><br/>
                <a href={BACKEND_URL + "/login/github"}>Github</a><br/>
                <a href={BACKEND_URL + "/login/facebook"}>Facebook</a><br/>
            </div>
        </div>
    )
}