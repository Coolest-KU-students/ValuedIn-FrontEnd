import { Button, Grid, Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import OrganizationTile from './organizations/OrganizationTile';
import Organization1 from './../../public/Organization1.jpg'
import Organization2 from './../../public/Organization2.jpg'
import Organization3 from './../../public/Organization3.jpg'
import Organization4 from './../../public/Organization4.jpg'
import { justGetTheJobs } from '../../API/internal_datasources/Jobs';
import { GetAllUsers } from '../../API/internal_datasources/Users';
import JobTile from './jobs/JobTile';
import { UserTile } from './users/UserTile';

function HomeFeed({AdjustNavbar}) {

    const organizations = [
        {id: 0, imageLink: Organization1, name:"BarberShop", description:"Classic BarberShop", match:"70" },
        {id: 1, imageLink: Organization2, name:"Saturated Development", description:"We develop projects for incredible ideas", match:"81"  },
        {id: 2, imageLink: Organization3, name:"WapeNash", description:"Ping Pong, pick Your Bong", match:"17"  },
        {id: 3, imageLink: Organization4, name:"Secret Shakespearean Club", description:"Selling Highest quality Shakespearean books+", match:"31"  },
    ]

    const jobs = justGetTheJobs();
    const users = GetAllUsers();


    const feed = [
        ...(organizations.map(org=>{return {type: "org", ...org}})),
        ...(users.map(org=>{return {type: "user", ...org}})),
        ...(jobs.map(org=>{return {type: "job", ...org}})),
    ]
    
    feed.sort((a,b)=> (a.match > b.match) ? -1 : 1);

    const [numberToShow, setNumberToShow] = useState(5);
    
    useEffect(() => {
        const props = {
            PageName: 'Home',
            currentListElement: 'Home',
        };
        AdjustNavbar(props, () => {});});
        
    const handleScroll = () =>{
        setTimeout(()=>{
            setNumberToShow(numberToShow+3);}, 300)
    }

    return (
        <Paper style={{backgroundColor: "#FFFFFFAA", padding:"10px"}}>
            <Grid container spacing={10}>
                <Grid item xs={12} >
                    
                    {
                        feed.slice(0, numberToShow).map(fed=>{
                            if(fed.type == "org"){
                                return (<OrganizationTile org={fed}/>);
                            }
                            if(fed.type == "user"){
                                return (<UserTile userData={fed} key={fed.fullName} /> )
                            }
                            return (<JobTile job={fed} />)

                        })
                    }
                </Grid>
            </Grid>
            <Button onClick={handleScroll}>
                Load More...
            </Button>
        </Paper>
    );
}

export default HomeFeed;