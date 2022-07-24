import Alert from '@mui/material/Alert';
import React, { useState, useEffect } from "react";
import {getApiUrl, postItems} from '../api/Api'
import {Navigate} from 'react-router-dom';

// TODO:
function orderBasket(basket){
    // PATCH request to change ordered items from 'available' to 'sold'
    // POST request to backend /transactions endpoint with new transaction.
}

const ProductDisplay = () => (
    <section>

      <form action={getApiUrl() + "/payment/create-checkout-session"} method="POST">
      </form>
    </section>
  );
  
const Message = ({ message }) => (
    <section>
        <p>{message}</p>
    </section>
);
  

export default function Checkout(props) {
    const user = props.user;
    const {basket, setBasket} = props.basketHook
    const [message, setMessage] = useState("");
    useEffect(() => {

        if(user && basket.length > 0) {
          document.getElementById("checkout-form").submit();
        }
        // Check to see if this is a redirect back from Checkout
        const query = new URLSearchParams(window.location.search);
        // form.submit()
        if (query.get("success")) {
          setMessage("Order placed! You will receive an email confirmation.");
        }
    
        if (query.get("canceled")) {
          setMessage(
            "Order canceled -- continue to shop around and checkout when you're ready."
          );
        }
      }, []);
      
    if(!user)
    return (
        <Alert variant="filled" severity="error">
            Please login to finalize purchases
        </Alert>
    )
    else
    return (
        message ? (
            <Message message={message} />
          ) : (
            <div>
              <form action={getApiUrl() + "/payment/create-checkout-session"} method="POST" id='checkout-form'>
              {
                basket.map(
                  (item) => (
                    <div>
                    <input type="hidden" key={item.ID} name="name" value={item.Name}></input>
                    <input type="hidden" key={item.ID} name="price" value={item.Price}></input>
                    </div>  
                  )
                )
              }

              </form>
            </div>
          )
    )
}

// {
  // basket.map((item) => (
  //     <input type="hidden" key={item.ID} name="item" value={item.Name}>1</input>
  //   )
//   )
// }

