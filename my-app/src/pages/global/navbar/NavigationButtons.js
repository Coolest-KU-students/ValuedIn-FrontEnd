import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import PeopleIcon from '@mui/icons-material/People';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import ListAltRoundedIcon from '@mui/icons-material/ListAltRounded';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import Collapse from '@mui/material/Collapse';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import CheckForUserPermissions from '../../../config/permissions/RoleAppPermissions';
import APP_GROUPS from '../../../config/enums/AppGroups';
import CommentIcon from '@mui/icons-material/Comment';
import { SidebarButtonListItem } from './SidebarButtons';
import CorporateFareSharpIcon from '@mui/icons-material/CorporateFareSharp';
export default function NavigationButtons(props) {
    const [open, setOpen] = useState(false);

    const theme = useSelector((state) => state.Theme);
    const userRole = useSelector(state => state.UserRole);

    const handleClick = () => {
        setOpen(!open);
    };

    const styleBasedOnType = (elementType) => {
        if (elementType === props.currentElement)
            return {
                backgroundColor: '#cadafa',
            };
        else return { backgroundColor: 'inherit' };
    };

    const UseHasAccessTo=(appGroup)=>{
       return CheckForUserPermissions(userRole, appGroup);
    }

    return (
        <div>
            <ListSubheader inset style={{ backgroundColor: 'inherit', color: 'inherit' }}>
                Navigation
            </ListSubheader>

            <SidebarButtonListItem text="Home" style={styleBasedOnType('Home')}  icon={<HomeWorkIcon />} />

            {UseHasAccessTo(APP_GROUPS.PERSONAL_PROFILE) &&
                <SidebarButtonListItem text="Profile" style={styleBasedOnType('Profile')} linkTo="/user/0" icon={<SettingsApplicationsIcon />} />
            }

            {UseHasAccessTo(APP_GROUPS.CHATBOX) &&
                <SidebarButtonListItem text="Messages" style={styleBasedOnType('Messages')} linkTo="/messages" icon={<CommentIcon />} />
            }

            {UseHasAccessTo(APP_GROUPS.SYSTEM_APP) &&
                <SidebarButtonListItem text="Users" style={styleBasedOnType('Users')} linkTo="/users" icon={<PeopleIcon />} />
            }

             {UseHasAccessTo(APP_GROUPS.ORGANIZATION_EDITING) &&
                <SidebarButtonListItem text="Organization Profile" style={styleBasedOnType('Organization Profile')} linkTo="/organizations" icon={<SettingsApplicationsIcon />} />
            }

            {UseHasAccessTo(APP_GROUPS.JOB_POSTING) &&
                <SidebarButtonListItem text="Profile" style={styleBasedOnType('Profile')} linkTo="/hrprofiles" icon={<SettingsApplicationsIcon />} />
            }
            
            {UseHasAccessTo(APP_GROUPS.FEEDS) &&
            <>
                <ListItem button onClick={handleClick}
                    style={open ? { backgroundColor: 'lightgrey' } : { backgroundColor: 'inherit' }}
                >
                    <ListItemIcon>
                            <ListAltRoundedIcon  />
                    </ListItemIcon>
                    <ListItemText primary="Feeds" />
                    {open ? <ExpandLess/> : <ExpandMore/>}
               </ListItem>

                <Collapse in={open} timeout="auto" unmountOnExit style={{ paddingLeft: '0.5rem' }}>
                    <SidebarButtonListItem text="Jobs" style={styleBasedOnType('Jobs')} linkTo="/jobs" icon={<LibraryAddCheckIcon />} />
                    
                    <SidebarButtonListItem text="Organizations" style={styleBasedOnType('Orgs')} linkTo="/organizations" icon={<CorporateFareSharpIcon />} />
                    
                <SidebarButtonListItem text="Users" style={styleBasedOnType('Users')} linkTo="/users" icon={<PeopleIcon />} />
                </Collapse>
            </>
            }
            <SidebarButtonListItem text="Log Out" linkTo="/logout" icon={<ExitToAppIcon />} />
        </div>
    );
}
