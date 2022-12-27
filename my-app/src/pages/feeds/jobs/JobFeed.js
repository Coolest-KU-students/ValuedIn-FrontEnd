import { Grid, Paper } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { loadJobOverviews } from '../../../API/internal_datasources/Jobs';
import { LoadingWrapper } from '../../global/loadingMgmt/LoadingWrapper';
import { ToastWrapper } from '../../global/notifications/ToastWrapper';
import SearchBar from '../../global/SearchBar';
import { SortingCard } from '../../global/SortingCard';
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
            setInitialLoadDone(true);
        };
        const handleTextSearch = (value) =>{
            ToastWrapper().error("Column not recognized");
        }

    return (
    <>
        <LoadingWrapper loaded = {initialLoadDone}>
        <Paper style={{backgroundColor:"ghostwhite"}}>
        <SearchBar onRequestSearch={(value) => handleTextSearch(value)} />
        <SortingCard ></SortingCard>
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

