import Header from './Header';
import Items from './ItemGrid' 
import Basket from './Basket';
import Checkout from './Checkout';
import useUser from '../hooks/User'
import useItems from '../hooks/Items'
import useBasket from '../hooks/Basket'
import {Route, Routes} from 'react-router-dom';


export default function Page() {
  const {user, setUser} = useUser()
  const {items} = useItems()
  const basketHook = useBasket()

  return (
      <div>
        <Header user={user} 
                setUser={setUser}
                basketCount={basketHook.basket.length}/>
        <Routes>
          <Route path="/" element={<Items items={items} basket={basketHook}/>} />
          <Route path="/basket" element={<Basket basketHook={basketHook} user={user}/>} />
          <Route path="/checkout" element={<Checkout basketHook={basketHook} user={user}/>} />
        </Routes>
      </div>
    )
}