import {useState, useEffect}  from 'react';
import {getItems} from '../api/Api'

export default function useItems() {
    const [items, setItems] = useState([]);
    useEffect(() => {
        setItems([])
        getItems().then((response) => {
            if(response.ok){
                response.json().then(
                    (data) => setItems(data))
            }
        })
    }, []);
    return {items, setItems}
}