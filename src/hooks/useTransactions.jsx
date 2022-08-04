import {useState, useEffect}  from 'react';
import {getTransactions} from '../api/Api';

export default function useTransactions() {
    const [transactions, setTransactions] = useState([]);
    useEffect(() => {
        getTransactions().then((response) => {
            if(response.ok) {
                response.json().then(
                    (data) => setTransactions(data))
            }
        })
    }, []);
    return {transactions, setTransactions}
}