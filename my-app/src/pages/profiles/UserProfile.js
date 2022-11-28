import {Typography, Avatar, Stack, IconButton, Paper, Grid, Divider} from '@mui/material'
import LocationOn from '@mui/icons-material/LocationOn';
import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Youtube from '@mui/icons-material/YouTube';
import Edit from '@mui/icons-material/Edit';
import React, { useEffect } from 'react';
import MichaelScott from './../../public/MichaelScott.avif'
import Banner1 from './../../public/Banner1.webp'
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
function UserProfile({AdjustNavbar}) {

    useEffect(() => {
        const props = {
            PageName: 'User Profile',
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
  <Grid item xs={4}>
    <Item> 
    <Stack spacing={1}>
    <Avatar src={MichaelScott} sx={{ width: 150, height: 150 }} style={{alignSelf: 'center'}}/>
      <Typography  variant="h5" fontWeight={700}>Michael Scott</Typography>
      <Typography variant="body1" color="text.secondary">
      <LocationOn sx={{color: grey[500]}} /> Scranton, PA
      </Typography>
    </Stack>
    <Typography>
    <IconButton>
      <Edit sx={{ fontSize: 14 }} />
    </IconButton>
    </Typography>
    </Item>
  </Grid>
  <Grid item xs={4}>
    <Item>
    <Stack spacing={1}>
      <Typography  variant="h3" fontWeight={700}>CV</Typography>
      <Divider/>
      <Typography variant="body1" color="text.secondary">Field of work: Paper management</Typography>
      <Typography variant="body1" color="text.secondary">Duration: 20 years</Typography>
      <Typography variant="body1" color="text.secondary">Skills: funny, loyal, honest </Typography>
    </Stack>
    </Item>
  </Grid>
  <Grid item xs={4}>
    <Item>
    <Stack spacing={1}>
      <Typography  variant="h3" fontWeight={700}>Values</Typography>
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
        <Grid item xs={12}>
          <Item><Stack spacing={2}>
          <Typography  variant="h3" fontWeight={700}>You can also find me at</Typography>
          <Divider/>
      <Typography variant="body1" color="text.secondary"><Facebook/> Facebook </Typography>
      <Typography variant="body1" color="text.secondary"><Instagram/>Instagram </Typography>
      <Typography variant="body1" color="text.secondary"><LinkedIn/>LinkedIn </Typography>
      <Typography variant="body1" color="text.secondary"><Youtube/> Youtube </Typography>
    </Stack>
    </Item>
        </Grid>
</Grid>
          )
    
       
}


export default UserProfile;