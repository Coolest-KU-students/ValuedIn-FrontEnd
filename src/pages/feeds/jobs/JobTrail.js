import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { loadJobProfile } from '../../../API/internal_datasources/Jobs';
import { LoadingWrapper } from '../../global/loadingMgmt/LoadingWrapper';
import { JobProfile } from '../../profiles/JobProfile';

export const JobTrail = () => {

    const [profile, setProfile] = useState();
    const [initialLoadDone, setInitialLoadDone] = useState(false);

    useEffect(() => {
        DataReload();
    }, []);

    const id = useParams().id;

    const DataReload = () =>{
        loadJobProfile(id-1, LoadData);
    };

    const LoadData = (data) =>{
        setProfile(data);
        setInitialLoadDone(true);
    };

    
    return (
        <LoadingWrapper loaded={initialLoadDone}>
            <Container>
                <JobProfile profile={profile} />
            </Container>
        </LoadingWrapper>
    )
}
