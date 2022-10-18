import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import OrganizationTile from './OrganizationTile';
import Organization1 from './../../../public/Organization1.png'
import Organization2 from './../../../public/Organization2.webp'
function OrganizationFeed({AdjustNavbar}) {

    const organizations = [
        {imageLink: Organization1, name:"BarberShop", description:"Classic BarberShop" },
        {imageLink: Organization2, name:"Saturated Development", description:"We develop projects for incredible ideas" },
        {imageLink: Organization1, name:"WapeNash", description:"Ping Pong, pick Your Bong" },
        {imageLink: Organization2, name:"Secret Shakespearean Club", description:"Selling Highest quality Shakespearean books+" },
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