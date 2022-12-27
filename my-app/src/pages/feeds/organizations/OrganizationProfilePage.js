import {Typography, Stack, IconButton, Paper, Grid, Divider, Button} from '@mui/material'
import LocationOn from '@mui/icons-material/LocationOn';
import {Link, useParams} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import { getOrganizationById } from '../../../API/internal_datasources/Organizations';
function OrganizationProfilePage({AdjustNavbar}) {


    const id = useParams().id;
    
    const organization = getOrganizationById(id);
    const [values, setValues] = useState(organization.values); 
    console.log( organization)
    useEffect(() => {
        const props = {
            PageName: 'Organization Profile',
        };
        AdjustNavbar(props, () => {});}
        , []);


        const Item = styled(Paper)(({ theme }) => ({
          backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
          ...theme.typography.body2,
          padding: theme.spacing(1),
          textAlign: 'center',
          color: theme.palette.text.secondary,
          height: 300
        }));

        const addNewValue = (newValue) =>{
          setValues([newValue, ...values]);
        }

        const [newChatModal, setnewChatModal] = useState(false);

        return (
  <Grid container spacing={2}>
     <Grid item xs={12}>
    <img src={organization.banner} alt="Logo"  width="1488px" height="250px" style={{alignSelf: 'center'}}/>
  </Grid>
  <Grid item xs={6}>
    <Item> 
    <Stack spacing={1}>
        <Typography  variant="h5" fontWeight={700}>{organization.name}</Typography>
      <Typography variant="body1" color="text.secondary">
        <LocationOn sx={{color: grey[500]}} /> {organization.city} 
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Match: {organization.match}%
      </Typography>
      <Divider/>
        <Typography  variant="body1" color="text.secondary">  {organization.description}</Typography>
      <Typography  variant="body1" color="text.secondary">  	Headquarters: {organization.city}</Typography>
        <Typography  variant="body1" color="text.secondary">  Owner: {organization.owner}</Typography>
      <Typography  variant="body1" color="text.secondary">  Slogan:	{organization.slogan}</Typography>
    </Stack>
    </Item>
  </Grid>
  <Grid item xs={6}>
    <Item>
    <Stack spacing={1}>
      <Typography  variant="h3" fontWeight={700}>Open positions</Typography>
      <Divider/>
      {organization.openPositions.map(position =>
        <Typography variant="body1" color="text.secondary">{position}</Typography>
        )}
    </Stack>
    </Item>
  </Grid>
  <Grid item xs={6}>
    <Item>
    <Stack spacing={1}>
      <Typography  variant="h3" fontWeight={700}>
        Organization values
      </Typography>
      <Divider/>
      {
        values.map(
          value => 
          <Typography variant="body1" color="text.secondary">{value}</Typography>
        )
      }
    </Stack>
    </Item>
  </Grid>
        <Grid item xs={6}>
          <Item><Stack spacing={1}>
          <Typography  variant="h3" fontWeight={700}>Employees values</Typography>
          <Divider/>
      {
        organization.employeeValues.map(
          value => 
          <Typography variant="body1" color="text.secondary">{value}</Typography>
        )
      }
      
    </Stack>
    </Item>
        </Grid>
</Grid>
          )
    
       
}
export default OrganizationProfilePage;