import {useEffect, useState}  from 'react';
import {getBasket} from '../api/Api'
import Cookies from 'js-cookie';

const removeDuplicatesByID = (itemArray) => {
    let uniqueDict = new Map()
    itemArray.forEach(element => {
        uniqueDict.set(element.ID, element)
    });
    return Array.from(uniqueDict.values())
}
export default function useBasket() {
    const [basket, setBasket] = useState([]);
    useEffect(() => {
        let newData = []
        if (Cookies.get('basket')) {
            newData = JSON.parse(Cookies.get('basket'))
        }
        setBasket(newData)
        getBasket().then((response) => {
            if(response.ok) {
                response.json().then(
                    (data) => {
                        newData = [...newData, ...data]
                        setBasket(removeDuplicatesByID(newData))
                    })
            }   
        })
    }, []);
    return {basket, setBasket}
}