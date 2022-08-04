import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import {logoutUser} from '../api/Api'
import ShoppingBag from '@mui/icons-material/ShoppingBag';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom';

export default function AccountItems(props) {
    if (props.user) {
        return (
            <div>
            <MenuItem>
                <Avatar/> {props.user}
            </MenuItem>
            <Link to="/orders">
            <MenuItem>
                <ShoppingBag /> Your orders
            </MenuItem>
            </Link>
            <Divider />
            <MenuItem>
                <ListItemIcon>
                <Settings fontSize="small" />
                </ListItemIcon>
                Settings
            </MenuItem>
            <MenuItem onClick={()=>{logoutUser();props.setUser(null)}}>
                <ListItemIcon>
                <Logout fontSize="small"/>
                </ListItemIcon>
                Logout
            </MenuItem>
            </div>
        )
    } else {
        return (
            <div>
            <Typography variant="h10">
            Login to see options
            </Typography>
            </div>
        )
    }

}