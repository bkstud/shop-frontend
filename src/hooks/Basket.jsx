import {useEffect, useState}  from 'react';
import {getBasket} from '../api/Api'

export default function useBasket() {
    const [basket, setBasket] = useState([]);
    useEffect(() => {
        getBasket().then((response) => {
            if(response.ok){
                response.json().then(
                    (data) => console.log('baske:=', data))
            }
        })
    }, []);
    return {basket, setBasket}
}