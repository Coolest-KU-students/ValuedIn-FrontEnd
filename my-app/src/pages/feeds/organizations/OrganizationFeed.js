import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import OrganizationTile from './OrganizationTile';
import Organization1 from './../../../public/Organization1.jpg'
import Organization2 from './../../../public/Organization2.jpg'
import Organization3 from './../../../public/Organization3.jpg'
import Organization4 from './../../../public/Organization4.jpg'

function OrganizationFeed({AdjustNavbar}) {

    const organizations = [
        {id: 0, imageLink: Organization1, name:"BarberShop", description:"Classic BarberShop" },
        {id: 1, imageLink: Organization2, name:"Saturated Development", description:"We develop projects for incredible ideas" },
        {id: 2, imageLink: Organization3, name:"WapeNash", description:"Ping Pong, pick Your Bong" },
        {id: 3, imageLink: Organization4, name:"Secret Shakespearean Club", description:"Selling Highest quality Shakespearean books+" },
    ]
    useEffect(() => {
        const props = {
            PageName: 'Organization Feed',
            currentListElement: 'Orgs',
        };
        AdjustNavbar(props, () => {});});
    
    
    return (
        <Grid container spacing={10}>
            <Grid item xs={12}>
                {organizations.map(org=>(
                    <OrganizationTile org={org}/>
                ))}
            </Grid>
        </Grid>
    );
}

export default OrganizationFeed;