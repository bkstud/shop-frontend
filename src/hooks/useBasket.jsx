import {useEffect, useState}  from 'react';
import {getBasket} from '../api/Api'
import Cookies from 'js-cookie';

export default function useBasket() {
    const [basket, setBasket] = useState([]);
    useEffect(() => {
        let newData = []
        getBasket().then((response) => {
            if(response.ok) {
                response.json().then(
                    (data) => newData = data)
            }
            if (Cookies.get('basket')) {
                newData = [...new Set([...JSON.parse(Cookies.get('basket')), ...newData])]
            }
            setBasket(newData)
        })
    }, []);
    return {basket, setBasket}
}