import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { SidebarButtonListItem } from '../../global/navbar/SidebarButtons';


export const UserSidebarTasks = (handleOpen) => {

    return (
        <div>
            <ListSubheader inset style={{ backgroundColor: 'inherit', color: 'inherit' }}>
                Tasks
            </ListSubheader>
            <SidebarButtonListItem text="Registered New" onClick={handleOpen} icon={<AddBoxIcon />}/>
        </div>
    );
}