import { ListSubheader } from '@mui/material';
import React from 'react';
import { SidebarButtonListItem } from '../../global/navbar/SidebarButtons';
import AddBoxIcon from '@mui/icons-material/AddBox';

export const MessageSidebarTasks = ({onNewClick}) => {

    return (
        <div>
            <ListSubheader inset style={{ backgroundColor: 'inherit', color: 'inherit' }}>
                Tasks
            </ListSubheader>
            <SidebarButtonListItem text="New Chat" onClick={onNewClick} icon={<AddBoxIcon />}/>
            
        </div>
    )
}
