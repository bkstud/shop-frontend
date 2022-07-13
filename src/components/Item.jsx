import * as React from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

export default function Item() {
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <Box sx={{ my: 1, mx: 2,
                    backgroundColor: 'secondary',
                    border: 1 }}>
            <Grid container alignItems="center">
                <Grid item xs>
                    <Typography gutterBottom variant="h5" component="div">
                    Toothbrush
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography gutterBottom variant="h6" component="div">
                    $4.50
                    </Typography>
                </Grid>
            </Grid>
            <Typography color="text.secondary" variant="body2">
            Pinstriped cornflower blue cotton blouse takes you on a walk to the park or
            just down the hall.
            </Typography>
        
            <Box sx={{ mt: 3, ml: 1, mb: 1}}>
                <Button>Add to cart</Button>
            </Box>
        </Box>
    </Box>
  );
}
