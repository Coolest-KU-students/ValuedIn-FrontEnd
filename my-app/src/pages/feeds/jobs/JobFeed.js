import { Grid, Paper } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { loadJobOverviews } from '../../../API/internal_datasources/Jobs';
import { LoadingWrapper } from '../../global/loadingMgmt/LoadingWrapper';
import JobTile from './JobTile';


const JobFeed = ({ AdjustNavbar }) => {

    const [jobs, setJobs] = useState([]);
    const [initialLoadDone, setInitialLoadDone] = useState(false);

    useEffect(() => {
        const props = {
            PageName: 'Job Feed',
            currentListElement: 'Jobs',
        };

        AdjustNavbar(props, () => {});
        DataReload();
    }, []);
        
        const DataReload = () =>{
            loadJobOverviews(LoadData);
        };
    
        const LoadData = (data) =>{
            setJobs(data);
            console.log(jobs);
            setInitialLoadDone(true);
        };
    
    return (
    <>
        <LoadingWrapper loaded = {initialLoadDone}>
        <Paper style={{backgroundColor:"ghostwhite"}}>
            <Grid container spacing={1}> 
                {
                    jobs.map((job)=>(
                        <Grid item xs={6}>
                            <JobTile job={job} />
                        </Grid>
                    ))
                }
            </Grid>
        </Paper>
        </LoadingWrapper> 
        </>
    )
}

export default JobFeed

