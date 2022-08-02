import Alert from '@mui/material/Alert';
import React, { useState, useEffect } from "react";
import {getApiUrl, patchItems} from '../api/Api'


export default function Checkout(props) {
    const user = props.user;
    const {basket, setBasket} = props.basketHook;
    const [message, setMessage] = useState("");
    let query = new URLSearchParams(window.location.search);
    const formGate = user && basket.length > 0 && !query.get("canceled") && !query.get("success")

    useEffect(() => {
        if(user === null) {
            setMessage (
              <Alert variant="filled" severity="error">
                  Please login to finalize purchases
              </Alert>
          )
          return
        }

        if(formGate) {
          const form = document.getElementById("checkout-form")
          if(form) {
            form.submit();
          }
          return
        }

        // let query = new URLSearchParams(window.location.search);
        if (query.get("success")) {
          patchItems("/basket/", [])
          setBasket([])
          setMessage(
            <Alert variant="filled" severity="success">
              Order placed! You will receive an email confirmation.
            </Alert>
            )
            return

        }

        if (query.get("canceled")) {
          setMessage(
            <Alert variant="filled" severity="info">
              Order canceled -- continue to shop around and checkout when you're ready.
            </Alert>
          );
          return
        }
        
        if(basket.length === 0) {
          setMessage(
            <Alert variant="filled" severity="info">
            No items in basket.
            </Alert>)
        }
        // eslint-disable-next-line
      }, [user, basket.length, formGate, setBasket]);

    if (formGate) {
      return (
        <div>
          <form action={getApiUrl() + "/payment/create-checkout-session"} method="POST" id='checkout-form'>
          {
            basket.map(
              (item) => (
                <div>
                  <input type="hidden" key={item.ID} name="name" value={item.Name}></input>
                  <input type="hidden" key={item.ID} name="price" value={item.Price}></input>
                  <input type="hidden" key={item.ID} name="id" value={item.ID}></input>
                </div>
              )
            )
          }

          </form>
        </div>
      )
    }
    else {
      return (
              <div>
                {message}
              </div>
            )
    }
}
