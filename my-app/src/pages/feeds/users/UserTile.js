
import { Divider, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const UserTile = ({userData}) => {
    console.log(userData.userData);
    return (
        <Paper style={{margin: '25px', padding: "10px"}}>
            <Grid container spacing={1}>
                <Grid item xs={2}>
                    <img src={userData.photo} alt="Logo" width="auto" height="150px"/>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="h5" to="#" component={Link} to={"/user/"+userData.id}>
                        {userData.fullName}
                    </Typography>
                    <Typography variant="h6">{userData.status}</Typography>
                    <Typography variant="h6"> Match: {userData.match}%</Typography>
                </Grid>
            </Grid>
            <Divider/> 
            <Typography variant="body2">{userData.values}</Typography>
        </Paper>
    )
}
