import { Divider, Grid, Paper, Typography } from '@mui/material'
import React from 'react'

const OrganizationTile = ({org}) => {


    return (
        <Paper style={{marginTop:"2rem"}}>
            <Grid container spacing={1}>
                <Grid item xs={4}>
                    <img src={org.imageLink} alt="Logo" width="350px" height="150px"/>
                </Grid>
                <Grid item xs={8}>
                    <Typography variant="h5">
                        {org.name}
                    </Typography>
                    <Divider/>
                    <Typography variant="body2">
                        {org.description}
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
        )
}

export default OrganizationTile
