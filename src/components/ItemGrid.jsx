
import * as React from 'react'; 
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Item from './Item' 

export default function ItemGrid(props) {
    return (
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 2, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
           { 
           props.items.forEach( (it) =>
                {
                <Grid item xs={4}>
                    <Item/>
               </Grid>}
            )
           }
           
           <Grid item xs={4}>
              <Item/>
           </Grid>
          </Grid>
        </Box>
      );
    }