import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import {logoutUser} from '../api/Api'
import Payment from '@mui/icons-material/Payment';
import ShoppingBag from '@mui/icons-material/ShoppingBag';

export default function AccountItems(props) {
    if (props.user) {
        return (
            <div>
            <MenuItem>
                <Avatar/> {props.user}
            </MenuItem>
            <MenuItem>
                <ShoppingBag /> Purchase History
            </MenuItem>
            <MenuItem>
                <Payment /> Payment
            </MenuItem>
            <Divider />
            <MenuItem>
                <ListItemIcon>
                <PersonAdd fontSize="small" />
                </ListItemIcon>
                Add another account
            </MenuItem>
            <MenuItem>
                <ListItemIcon>
                <Settings fontSize="small" />
                </ListItemIcon>
                Settings
            </MenuItem>
            <MenuItem onClick={logoutUser}>
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
                Login to see options
            </div>
        )
    }

}