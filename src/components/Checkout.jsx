import Alert from '@mui/material/Alert';

// TODO:
function orderBasket(basket){
    // PATCH request to change ordered items from 'available' to 'sold'
    // POST request to backend /transactions endpoint with new transaction.
}

export default function Checkout(props) {
    const user = props.user;
    if(!user)
    return (
        <Alert variant="filled" severity="error">
            Please login to finalize purchases
        </Alert>
    )
    else
    return (
        <div>
            This is checkout!
        </div>
    )
}