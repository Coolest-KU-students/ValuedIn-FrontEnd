import { Grid, Paper } from '@mui/material';
import React, { useEffect } from 'react'
import JobTile from './JobTile';


const JobFeed = ({ AdjustNavbar }) => {

    const jobs = [
        {jobTitle: "Job 1", jobDescription:"This is a job", jobTags:"Good, job, this"}, 
        {jobTitle: "Job 2", jobDescription:"This is also a job", jobTags:"Good, also, job, this"},
        {jobTitle: "Job 3", jobDescription:"This is another job", jobTags:"Good, another, job, this"},
        {jobTitle: "Job 4", jobDescription:"This is the last job", jobTags:"Good, last job, this"},
    ];
    useEffect(() => {
        const props = {
            PageName: 'Job Feed',
            currentListElement: 'Jobs',
        };
        AdjustNavbar(props, () => {});});
    
    
    return (
        <Paper style={{backgroundColor:"ghostwhite"}}>
            <Grid container spacing={1}> 
                {
                    jobs.map((job)=>(
                        <Grid item xs={4}>
                            <JobTile job={job} />
                        </Grid>
                    ))
                }
            </Grid>
        </Paper>
    )
}

export default JobFeed

