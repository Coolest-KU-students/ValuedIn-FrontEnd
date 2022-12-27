import {Typography, Avatar, Stack, IconButton, Paper, Grid, Divider} from '@mui/material'
import LocationOn from '@mui/icons-material/LocationOn';
import SaveIcon from '@mui/icons-material/Save';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

export const JobProfile = ({profile}) => {

        const Item = styled(Paper)(({ theme }) => ({
          backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
          ...theme.typography.body2,
          padding: theme.spacing(1),
          textAlign: 'center',
          color: theme.palette.text.secondary,
          height: 600
        }));



        return (
  <Grid container spacing={2}>
  <Grid item xs={4}>
    <Item> 
    <Stack spacing={1}>
    <Avatar src={profile.jobAvatar} sx={{ width: 150, height: 150 }} style={{alignSelf: 'center'}}/>
      <Typography  variant="h5" fontWeight={700}>
        {profile.jobTitle}
         </Typography>
      <Typography  variant="h5" fontWeight={700}>
        {profile.jobOffer}
        </Typography>
      <Typography variant="body1" color="text.secondary">
      <LocationOn sx={{color: grey[500]}} />
       {profile.jobLocation}
      </Typography>
    </Stack>
    <Typography>
    <IconButton>
      <SaveIcon sx={{ fontSize: 14 }} />
    </IconButton>
    </Typography>
    </Item>
  </Grid>
  <Grid item xs={4}>
    <Item>
    <Stack spacing={1}>
      <Typography  variant="h3" fontWeight={700}>
        Job description
        </Typography>
      <Divider/>
      <Typography variant="body1" color="text.secondary">
       {profile.jobDescription}
       </Typography>
      <Typography variant="body1" color="text.secondary">
        {profile.jobField}
        </Typography>
      <Typography variant="body1" color="text.secondary">
       {profile.jobSkills}
        </Typography>
      <Typography variant="body1" color="text.secondary">
        {profile.jobSalary}
        </Typography>
    </Stack>
    </Item>
  </Grid>
  <Grid item xs={4}>
    <Item>
    <Stack spacing={1}>
      <Typography  variant="h3" fontWeight={700}>
        Values
        </Typography>
      <Divider/>
          <Typography variant="body1" color="text.secondary"></Typography>
    </Stack>
    </Item>
  </Grid>
</Grid>
       
        )
    }
