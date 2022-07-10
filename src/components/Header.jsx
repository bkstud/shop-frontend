import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import GithubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import AccountMenu from './Account'
import {getApiUrl} from '../api/Api'

export default function TopHeader(props) {
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
          <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Shop
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
          
          <AccountMenu user={props.user}></AccountMenu>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
