
import { Divider, Paper, Typography, Avatar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const JobTile = ({job}) => {

    

    return (
        <Paper style={{margin: '15px'}}>
            <Avatar src={job.jobAvatar} sx={{ width: 100, height: 100 }} style={{alignSelf: 'center'}}/>
            <Typography variant="h4" component={Link} to={"/jobs/"+job.jobId} button>
            
                {job.jobTitle}
            </Typography>
            <Divider></Divider>
            <Typography>
                {job.jobDescription}
            </Typography>

            <Typography variant="body2">Tags:{job.jobTags}</Typography>
            
            <Divider></Divider>
            <Typography variant="body2">Values: {job.values}</Typography>
            <Typography variant="body2">Match: {job.match}%</Typography>
        </Paper>
    )
}

export default JobTile
