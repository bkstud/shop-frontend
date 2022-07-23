import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import RemoveShoppingCart from '@mui/icons-material/RemoveShoppingCart';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Alert from '@mui/material/Alert';
import {Link} from 'react-router-dom';


export default function Basket(props) {
    const {basket, setBasket} = props.basketHook
    const user = props.user;

    const removeFromBasket = (ID) => {
        setBasket(basket.filter((value) => value.ID !== ID) )
    }
    var buttonInactive = basket.length === 0 || !props.user
    var basketSummary = basket.reduce((total, current) => {return total + current.Price}, 0)
    return (
    <Grid container spacing={3}>
    <Grid item xs={{ flexGrow: 1 }}>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 150, maxWidth: 750 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                <TableCell>Product</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left"></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {basket.map((item) => (
                <TableRow
                    key={item.ID}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell component="th" scope="row">
                    {item.Name}
                    </TableCell>
                    <TableCell align="left">{item.Price}$</TableCell>
                    <TableCell align="left">
                        <IconButton onClick={()=>removeFromBasket(item.ID)} color="error">
                            <RemoveShoppingCart />
                        </IconButton>
                    </TableCell>
                </TableRow>
                ))}

                <TableRow
                    key="summary"
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell component="th" scope="row">
                    Sum
                    </TableCell>
                    <TableCell align="left">{
                    basketSummary
                    }$
                    </TableCell>
                    <TableCell align="left">


                    <Link to={buttonInactive ? "#" : "/checkout"}>
                        <Button variant="contained" 
                                size="small"
                                endIcon={<ShoppingCartCheckoutIcon />} 
                                disabled={buttonInactive}
                        >
                            checkout    
                        </Button>
                    </Link>
                    </TableCell>
                </TableRow>
                {
                (basket.length > 0 && !props.user) && (
                <TableRow>
                    <TableCell/><TableCell/>
                        <TableCell align="left">
                        <Alert variant="outlined" severity="info">
                            Login to go to checkout
                        </Alert>
                    </TableCell>
                </TableRow>)
                }

            </TableBody>
            </Table>

        </TableContainer>

    </Grid>
    </Grid>
    );
}