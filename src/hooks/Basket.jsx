import {useState}  from 'react';

export default function useBasket() {
    const [basket, setBasket] = useState([]);
    return {basket, setBasket}
}