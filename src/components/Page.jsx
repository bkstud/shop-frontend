import Header from './Header';
import useUser from '../hooks/User'
import useItems from '../hooks/Items'
import useBasket from '../hooks/Basket'

export default function Page(props) {
  const {user, setUser} = useUser()
  const {items, setItems} = useItems()
  const {basket, setBasket} = useBasket()
  return (
      <div>
        <Header user={user} setUser={setUser}/>
      </div>
    )
}