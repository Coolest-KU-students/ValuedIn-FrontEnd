import {Typography, Avatar, Stack, IconButton, Paper, Grid, Divider} from '@mui/material'
import LocationOn from '@mui/icons-material/LocationOn';
import Edit from '@mui/icons-material/Edit';
import React, { useEffect } from 'react';
import Banner1 from './../../public/Banner1.webp'
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
function OrganizationProfile({AdjustNavbar}) {

    useEffect(() => {
        const props = {
            PageName: 'Organization Profile',
        };
        AdjustNavbar(props, () => {});});

        const Item = styled(Paper)(({ theme }) => ({
          backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
          ...theme.typography.body2,
          padding: theme.spacing(1),
          textAlign: 'center',
          color: theme.palette.text.secondary,
          height: 300
        }));
        
        return (
  <Grid container spacing={2}>
     <Grid item xs={12}>
    <img src={Banner1} alt="Logo" width="1230px" height="250px" style={{alignSelf: 'center'}}/>
  </Grid>
  <Grid item xs={6}>
    <Item> 
    <Stack spacing={1}>
      <Typography  variant="h5" fontWeight={700}>Dunder Mifflin Paper Company, Inc.</Typography>
      <Typography variant="body1" color="text.secondary">
      <LocationOn sx={{color: grey[500]}} /> Scranton, PA
      </Typography>
      <Divider/>
      <Typography  variant="body1" color="text.secondary">  Paper and office supplies wholesale company.</Typography>
      <Typography  variant="body1" color="text.secondary">  	Headquarters: New York City</Typography>
      <Typography  variant="body1" color="text.secondary">  Owner: David Wallace</Typography>
      <Typography  variant="body1" color="text.secondary">  Slogan:	Limitless Paper in a Paperless World</Typography>
    </Stack>
    <Typography>
    <IconButton>
      <Edit sx={{ fontSize: 14 }} />
    </IconButton>
    </Typography>
    </Item>
  </Grid>
  <Grid item xs={6}>
    <Item>
    <Stack spacing={1}>
      <Typography  variant="h3" fontWeight={700}>Open positions</Typography>
      <Divider/>
      <Typography variant="body1" color="text.secondary">Finance</Typography>
      <Typography variant="body1" color="text.secondary">Sales</Typography>
      <Typography variant="body1" color="text.secondary">HR</Typography>
    </Stack>
    <Typography>
    <IconButton>
      <Edit sx={{ fontSize: 14 }} />
    </IconButton>
    </Typography>
    </Item>
  </Grid>
  <Grid item xs={6}>
    <Item>
    <Stack spacing={1}>
      <Typography  variant="h3" fontWeight={700}>Organization values</Typography>
      <Divider/>
      <Typography variant="body1" color="text.secondary">Value</Typography>
      <Typography variant="body1" color="text.secondary">Value</Typography>
      <Typography variant="body1" color="text.secondary">Value</Typography>
      <Typography variant="body1" color="text.secondary">Value</Typography>
      <Typography variant="body1" color="text.secondary">Value</Typography>
      <Typography variant="body1" color="text.secondary">Value</Typography>
    </Stack>
    <Typography>
    <IconButton>
      <Edit sx={{ fontSize: 14 }} />
    </IconButton>
    </Typography>
    </Item>
  </Grid>
        <Grid item xs={6}>
          <Item><Stack spacing={1}>
          <Typography  variant="h3" fontWeight={700}>Employees values</Typography>
          <Divider/>
          <Typography variant="body1" color="text.secondary">Value</Typography>
      <Typography variant="body1" color="text.secondary">Value</Typography>
      <Typography variant="body1" color="text.secondary">Value</Typography>
      <Typography variant="body1" color="text.secondary">Value</Typography>
      <Typography variant="body1" color="text.secondary">Value</Typography>
      <Typography variant="body1" color="text.secondary">Value</Typography>
    </Stack>
    </Item>
        </Grid>
</Grid>
          )
    
       
}


export default OrganizationProfile;