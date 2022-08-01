import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import RemoveShoppingCart from '@mui/icons-material/RemoveShoppingCart';
import IconButton from '@mui/material/IconButton';
import {patchItems} from '../api/Api';



export default function Item(props) {
  const item = props.item;
  const {basket, setBasket} = props.basket;
  const [disabled, setDisabled] = React.useState(basket.some((value) => value.ID === item.ID));
  const addToCart = () => {
    const newBasket = basket.concat(item)
    setBasket(newBasket)
    patchItems("/basket/", newBasket)
    setDisabled(true)
  }
  
  const removeFromCart = () => {
    const newBasket = basket.filter((value) => value.ID !== item.ID)
    setBasket(newBasket)
    patchItems("/basket/", newBasket)
    setDisabled(false)
  }

  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <Box sx={{ my: 1, mx: 2,
                    backgroundColor: 'secondary',
                    border: 1 }}>
            <Grid container alignItems="center">
                <Grid item xs>
                    <Typography gutterBottom variant="h6" component="div">
                    {item.Name}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography gutterBottom variant="h6" component="div">
                    ${item.Price}
                    </Typography>
                </Grid>
            </Grid>
            <Typography color="text.secondary" variant="body3">
                {item.Description}
            </Typography>
        
            <Box sx={{ mt: 3, ml: 1, mb: 1}}>
                <Button variant="contained"
                onClick={addToCart}
                disabled={disabled}
                >Add to cart</Button>
                
                <IconButton 
                onClick={removeFromCart}
                disabled={!disabled}
                color="error"
                ><RemoveShoppingCart /></IconButton>
            </Box>
            
            
            
        </Box>
    </Box>
  );
}
