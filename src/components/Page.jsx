import Header from './Header';
import ItemGrid from './ItemGrid' 
import useUser from '../hooks/User'
import useItems from '../hooks/Items'
import useBasket from '../hooks/Basket'


export default function Page(props) {
  const {user, setUser} = useUser()
  const {items, setItems} = useItems()
  const basketHook = useBasket()

  return (
      <div>
        <Header user={user} 
                setUser={setUser}
                basketCount={basketHook.basket.length}/>
        <ItemGrid items={items} basket={basketHook}/>
      </div>
    )
}