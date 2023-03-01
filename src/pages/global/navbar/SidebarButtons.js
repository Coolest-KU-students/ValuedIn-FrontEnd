import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';

export const SidebarButtonListItem = ({text, style, linkTo, onClick, icon}) => {
    const linkProps = !!linkTo ? {component: Link, to: linkTo} : {};
    const buttonProps = !!onClick ? {onClick: onClick} : {};

    return (
         <ListItem {...linkProps} {...buttonProps} button style={style}>
            <ListItemIcon>
                {icon}
            </ListItemIcon>
            <ListItemText primary={text} />
        </ListItem>
    )
}
