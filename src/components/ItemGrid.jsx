
import * as React from 'react'; 
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Item from './Item' 

// TODO: items should be filtered by status to show 'available' only
export default function ItemGrid(props) {
    return (
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 2, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
           { 
            props.items.map( (it) => {
                  return (
                  <Grid item xs={4} key={it.ID}>
                      <Item item={it} basket={props.basket}/>
                </Grid>);
            })
           }
          </Grid>
        </Box>
      );
    }