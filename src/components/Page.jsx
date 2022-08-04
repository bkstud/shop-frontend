import Header from './Header';
import Items from './ItemGrid' 
import Basket from './Basket';
import Checkout from './Checkout';
import Feedback from './Feedback';
import Orders from './Orders';
import useUser from '../hooks/useUser'
import useItems from '../hooks/useItems'
import useBasket from '../hooks/useBasket'
import {Route, Routes} from 'react-router-dom';
import useTransactions from '../hooks/useTransactions';


export default function Page() {
  const {user, setUser} = useUser()
  const {items} = useItems()
  const basketHook = useBasket()
  const {transactions} = useTransactions()

  return (
      <div>
        <Header user={user} 
                setUser={setUser}
                basketCount={basketHook.basket.length}/>
        <Routes>
          <Route path="/" element={<Items items={items} basketHook={basketHook}/>} />
          <Route path="/basket" element={<Basket basketHook={basketHook} user={user}/>} />
          <Route path="/checkout" element={<Checkout basketHook={basketHook} user={user}/>} />
          <Route path="/feedback" element={<Feedback user={user}/>} />
          <Route path="/orders" element={<Orders transactions={transactions} user={user}/>} />
        </Routes>
      </div>
    )
}