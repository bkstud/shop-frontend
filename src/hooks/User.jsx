import {useState, useEffect}  from 'react';
import {getCurrentUser} from '../api/Api'



export default function useUser() {
    const [user, setUser] = useState(null);
    useEffect(() => {
        setUser(null)
        getCurrentUser().then((response) => {
            if(response.ok){
                response.json().then(
                    (data) => setUser(data["user"]))
            }
            else{
            setUser(null)  
            }
        })
    }, []);
    return {user, setUser}
}
