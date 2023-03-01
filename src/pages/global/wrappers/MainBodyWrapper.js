import { Container } from '@mui/material';
import React from 'react';
import { makeStyles } from 'tss-react/mui';


const drawerWidth = 240;
const useStyles = makeStyles()((theme) => ({
    content: {
        marginTop: '5rem',
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        [theme.breakpoints.down('md')]: {
            marginLeft: '3rem',
            width: '95%',
        },
        display: 'inline-flex',
        flexDirection: 'column',
    },
}));

const MainBodyWrapper = ({ children }) => {

    const { classes } = useStyles();

    return (
        <Container maxWidth="xl" className={classes.content}>
            {children}
        </Container>
    )
}

export default MainBodyWrapper
