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
import HomeIcon from '@mui/icons-material/Home';
import FeedbackIcon from '@mui/icons-material/Feedback';
import {Link, useLocation} from 'react-router-dom';
import {getApiUrl} from '../api/Api'
import AccountMenu from './AccountMenu'


export default function Header(props) {
  const location = useLocation();
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

            <Link to="/basket">
              <IconButton color="inherit" aria-label="shoping cart" component="span">
                <Badge badgeContent={props.basketCount} color="error">
                  <ShoppingCartIcon color="inherit"/>    
                </Badge>
              </IconButton>
            </Link>
          </IconButton>
          
          <Link to="/feedback">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}>
              <FeedbackIcon color="inherit"/>   
            </IconButton>
            </Link>
            
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">
              Shop
              <HomeIcon/>
            </Link>
          </Typography>


          <a href={getApiUrl() + "/login/github?location=" + location.pathname}>
              <IconButton color="inherit" aria-label="github login" href="url"
                          component="span">
                <GithubIcon/>
              </IconButton>  
            </a>
          <a href={getApiUrl() + "/login/facebook?location=" + location.pathname}>
            <IconButton color="inherit" aria-label="facebook login" component="span">
              <FacebookIcon />
            </IconButton>
          </a>
          
          <a href={getApiUrl() + "/login/google?location=" + location.pathname}>
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
