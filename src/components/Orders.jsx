import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';


export default function Orders(props) {
    const orders = props.transactions;
    const user = props.user;
    if(!user) {
        return (<Alert variant="outlined" severity="info">
        Please login to see your orders.
    </Alert>)
    } else {
        return (
            
            <Grid container spacing={3}>
            <Grid item xs={12} xm={12}></Grid>
            <Grid item>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 150, maxWidth: 750 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                        <TableCell align="center">
                            <Typography variant="h6" component="div">
                                Your orders:
                            </Typography>
                        </TableCell><TableCell/><TableCell/><TableCell/><TableCell/>
                        </TableRow>
                        <TableRow>
                        <TableCell>Product</TableCell>
                        <TableCell align="left">Price</TableCell>
                        <TableCell align="left">Type</TableCell>
                        <TableCell align="left">Payment status</TableCell>
                        <TableCell align="left">Realization status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((order) => (
                        <TableRow
                            key={order.ID}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">{order.Item.Name}</TableCell>
                            <TableCell align="left">{order.Item.Price}$</TableCell>
                            <TableCell align="left">{order.Type}</TableCell>
                            <TableCell align="center">{order.Payment}</TableCell>
                            <TableCell align="center">{order.Status}</TableCell>
                        </TableRow>
                        ))}
                        {
                        (!user) && (
                        <TableRow>
                            <TableCell/><TableCell/>
                                <TableCell align="left">

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
}