import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles } from 'tss-react/mui';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
/*import Switch from '@mui/material/Switch';*/
import logo from '../../../logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import NavigationButtons from './NavigationButtons';
//import { ChangeTheme } from '../reducers/actions/ThemeActions';

const drawerWidth = 240;

const useStyles = makeStyles()((theme) => ({
    Display: {
        display: 'flex',
    },

    Hide: {
        display: 'none',
    },

    right: {
        alignItems: 'right',
        display: 'flex',
        justifyContent: 'flex-end',
    },

    root: {
        flexGrow: 1,
    },
    menuButton: {
        display: 'none',
        [theme.breakpoints.down('md')]: {
            marginRight: theme.spacing(2),

            display: 'box',
        },
    },

    link: {
        color: '#ffffff',
        textDecoration: 'none',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'absolute',
        display: 'inline-block',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        position: 'fixed',
        display: 'inline-flex',
        width: drawerWidth,
        [theme.breakpoints.down('md')]: {
            overflowX: 'hidden',
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            width: theme.spacing(7),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
}));

Navbar.propTypes = {
    PageName: PropTypes.string,
    currentListElement: PropTypes.string,
    children: PropTypes.any,
};

export default function Navbar(props) {
    const theme = useSelector((state) => state.Theme);
    const dispatch = useDispatch();
    const { classes } = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    document.body.style = theme.bodyStyle;

    const NavbarHeight = '45px';

    const handleThemeChange = (e) => {
       // dispatch(ChangeTheme(e.target.checked ? 'Light' : 'Dark'));
    };
    console.log(classes);
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={open ? classes.appBarShift : classes.appBar} color={theme.navbarColor}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color={theme.navbarPageNameColor}
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={open ? classes.menuButtonHidden : classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>

                    <img style={{ height: NavbarHeight }} src={logo} className="App-logo" alt="logo" />
                    <Typography
                        component="h1"
                        variant="h6"
                        color="black"
                        noWrap
                        className={classes.title}
                        color={theme.navbarPageNameColor}
                    >
                        ValuedIn {props.PageName ? ':: ' + props.PageName : ''}
                    </Typography>
                    <IconButton color="inherit" style={{ display: 'none' }}>
                        <Badge badgeContent={4} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    {/*<Switch
                        color="default"
                        inputProps={{ 'aria-label': 'checkbox with default color' }}
                        onChange={handleThemeChange}
                    />*/}
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                    paper: open ? classes.drawerPaper : classes.drawerPaperClose,
                }}
                open={open}
                PaperProps={{ style: theme.navbarDrawerStyle }}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <List>
                     <NavigationButtons currentElement={props.currentListElement} />
                </List>
                <Divider light={theme.theme == 'Dark'} />
                <List>{props.children}</List>
            </Drawer>
        </div>
    );
}
/*
const HomeButton = () => {
  const classes = useStyles();
  return (
    <Button variant="contained" color="primary">
      <div to="/" className={classes.link}>
        <span>Home</span>
      </div>
    </Button>
  );
};

const LogOut = () => {
  return (
    <Button variant="contained" color="primary">
      <span>Logout</span>
    </Button>
  );
};
*/
