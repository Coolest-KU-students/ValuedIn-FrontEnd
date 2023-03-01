import { Divider, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const OrganizationTile = ({org}) => {


    return (
        <Paper style={{margin: '25px', padding: "10px"}}>
            <Grid container spacing={1}>
                <Grid item xs={3}>
                    <img src={org.imageLink} alt="Logo" width="250px" height="150px"/>
                </Grid>
                <Grid item xs={8}>
                    <Typography variant="h5" component={Link} to={"/organization/"+org.id}>
                        {org.name}
                    </Typography>
                    <Divider/>
                    <Typography variant="body2">
                        {org.description}
                    </Typography>
                    {!!org.match &&
                    <Typography variant="body2" fontWeight="bold">
                        Match: {org.match}%
                    </Typography>
                    }
                </Grid>
            </Grid>
        </Paper>
        )
}

export default OrganizationTile
