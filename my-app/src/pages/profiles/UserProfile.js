import {Typography, Avatar, Stack, IconButton, Paper, Grid, Divider, Button} from '@mui/material'
import LocationOn from '@mui/icons-material/LocationOn';
import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Youtube from '@mui/icons-material/YouTube';
import Edit from '@mui/icons-material/Edit';
import React, { useEffect, useState } from 'react';
import MichaelScott from './../../public/MichaelScott.avif'
import Banner1 from './../../public/Banner1.webp'
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import { ValuesModal } from './ValuesModal';
import { InteractionModalWrapper } from '../global/wrappers/InteractionModalWrapper';
import {useParams} from 'react-router-dom';
import { GetUserById } from '../../API/internal_datasources/Users';

function UserProfile({AdjustNavbar }) {

  const userData = GetUserById(useParams().id); 

  const isSelf = !userData;

  const [currentUser, setCurrentUser] = useState(!isSelf ? userData : getDefaultUser());
  const [values, setValues] = useState(!isSelf ? userData.values.split(',') :getValues()); 

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
    <InteractionModalWrapper open={newChatModal && isSelf}>
                <ValuesModal callback={value=>{addNewValue(value); setnewChatModal(false)}} />
            </InteractionModalWrapper>
    <Grid item xs={12}>
    <img src={currentUser.banner} alt="Logo" width="1230px" height="250px" style={{alignSelf: 'center'}}/>
  </Grid>
  <Grid item xs={4}>
    <Item> 
    <Stack spacing={1}>
    <Avatar src={currentUser.photo} sx={{ width: 150, height: 150 }} style={{alignSelf: 'center'}}/>
        <Typography  variant="h5" fontWeight={700}>{currentUser.fullName}</Typography>
      <Typography variant="body1" color="text.secondary">
      <LocationOn sx={{color: grey[500]}} /> {currentUser.city}
      </Typography>
    </Stack>
    <Typography>
    {isSelf && <IconButton>
      <Edit sx={{ fontSize: 14 }} />
    </IconButton>}
    </Typography>
    </Item>
  </Grid>
  <Grid item xs={4}>
    <Item>
    <Stack spacing={1}>
      <Typography  variant="h3" fontWeight={700}>CV</Typography>
      <Divider/>
      {currentUser.CV.map(cv=>
          <Typography variant="body1" color="text.secondary">{cv} </Typography>
      )}
    </Stack>
      <Typography>
    {isSelf && <IconButton>
      <Edit sx={{ fontSize: 14 }}/>
    </IconButton>}
    </Typography>
    </Item>
  </Grid>
  <Grid item xs={4}>
    <Item>
    <Stack spacing={1}>
      <Typography  variant="h3" fontWeight={700}>
        Values
        {isSelf && <Button onClick={()=>{setnewChatModal(true)}}>Add</Button>}
        </Typography>
      <Divider/>
      {
        values.map(
          value => 
          <Typography variant="body1" color="text.secondary">{value}</Typography>
        )
      }
      <Divider/>
        
      {!isSelf && <Typography variant="body1" color="text.secondary">Match: {currentUser.match}%</Typography>}
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


const getValues = () =>{
  return ["Honesty", "Loyalty", "Sense of humour"];
}

const getDefaultUser = () =>{
  return {
    id: 0,
    fullName : "Michael Scott", 
    city: "Scranton, PA",
    CV: ["Field of work: Paper management", "Duration: 20 years", "Skills: sales, management"],
    values: getValues(),
    photo: MichaelScott,
    banner: Banner1,
    match: null
  }
}


export default UserProfile;