import {Typography, Avatar, Stack, IconButton, Paper, Grid, Divider, Button} from '@mui/material'
import LocationOn from '@mui/icons-material/LocationOn';
import Edit from '@mui/icons-material/Edit';
import React, { useEffect, useState } from 'react';
import Toby from './../../public/Toby.jpg'
import Banner1 from './../../public/Banner1.webp'
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import { ValuesModal } from './ValuesModal';
import { InteractionModalWrapper } from '../global/wrappers/InteractionModalWrapper';
function HRProfile({AdjustNavbar}) {

  const [values, setValues] = useState(getValues()); 

    useEffect(() => {
        const props = {
            PageName: 'User Profile',
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
    <InteractionModalWrapper open={newChatModal}>
                <ValuesModal callback={value=>{addNewValue(value); setnewChatModal(false)}} />
            </InteractionModalWrapper>
    <Grid item xs={12}>
    <img src={Banner1} alt="Logo" width="1230px" height="250px" style={{alignSelf: 'center'}}/>
  </Grid>
  <Grid item xs={4}>
    <Item> 
    <Stack spacing={1}>
    <Avatar src={Toby} sx={{ width: 150, height: 150 }} style={{alignSelf: 'center'}}/>
      <Typography  variant="h5" fontWeight={700}>Toby Flenderson</Typography>
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
      <Typography  variant="h3" fontWeight={700}>Job Listings</Typography>
      <Divider/>
      <Typography variant="body1" color="text.secondary">Finance position</Typography>
      <Typography variant="body1" color="text.secondary">Sales position</Typography>
      <Typography variant="body1" color="text.secondary">Management position </Typography>
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
      <Typography  variant="h3" fontWeight={700}>
        Values
        <Button onClick={()=>{setnewChatModal(true)}}>Add</Button>
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
</Grid>
          )
    
    }       


const getValues = () =>{
  return ["Calmness", "Good listener", "Fairness"];
}


export default HRProfile;