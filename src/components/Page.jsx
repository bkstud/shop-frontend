import React, {useState, useEffect}  from 'react';
import {getCurrentUser} from '../api/Api'
import TopHeader from './Header';

function useUser() {
  const [user, setUser] = useState(null);
  useEffect(() => {
      console.log('Hello from useEffect!');
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
  return user
}

export default function Page(props) {
  return (
      <div>
        <TopHeader user={useUser()}/>
      </div>
    )
}