
import { Divider, Paper, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const JobTile = ({job}) => {
    return (
        <Paper style={{margin: '15px'}}>
            <Typography variant="h5" component={Link} to="#">
                {job.jobTitle}
            </Typography>
            <Typography variant="h6">{job.jobDescription}</Typography>
            <Divider/> 
            <Typography variant="body2">Tags:{job.jobTags}</Typography>
        </Paper>
    )
}

export default JobTile
