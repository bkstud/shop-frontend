import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import GithubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountMenu from './AccountMenu'
import {getApiUrl} from '../api/Api'
import {Link} from 'react-router-dom';

export default function Header(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >

            <IconButton color="inherit" aria-label="shoping cart" component="span">
              <Badge badgeContent={props.basketCount} color="error">
              <Link to="/basket"><ShoppingCartIcon color="inherit"/></Link>
              </Badge>
            </IconButton>
          
          
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">Shop</Link>
          </Typography>
          <a href={getApiUrl() + "/login/github"}>
              <IconButton color="inherit" aria-label="github login" href="url"
                          component="span">
                <GithubIcon/>
              </IconButton>  
            </a>
          <a href={getApiUrl() + "/login/facebook"}>
            <IconButton color="inherit" aria-label="facebook login" component="span">
              <FacebookIcon />
            </IconButton>
          </a>
          
          <a href={getApiUrl() + "/login/google"}>
            <IconButton color="inherit" aria-label="google login" component="span">
              <GoogleIcon/>
            </IconButton>
          </a>
          
          
          <AccountMenu user={props.user} setUser={props.setUser}></AccountMenu>
          
          


        </Toolbar>
      </AppBar>
    </Box>
  );
}
