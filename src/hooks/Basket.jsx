import React, {useState, useEffect}  from 'react';
import {getItems} from '../api/Api'

export default function useBasket() {
    const [basket, setBasket] = useState([]);
    return {basket, setBasket}
}