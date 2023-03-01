import { Card, Container, Divider, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

const SingleMessageCard = ({messageData}) => {
    return (
        <Container style={{marginBottom:"10px"}} >
            <Paper>
                <Card>
                    <Grid container spacing={1}> 
                        <Grid item xs={2}>
                            <img src={messageData.profilePhotoRef} alt="Avatar" width="250px" height="150px"/>
                        </Grid>
                        <Grid item xs={1}>
                        </Grid>
                        <Grid item xs={9}> 
                                <Typography variant="h5" component={Link} to={"/messages/"+messageData.chatId} button>
                                    
                                { messageData.fullName } 
                                </Typography>
                            <Divider></Divider>
                            <Typography>
                                {messageData.lastMessageContent}
                            </Typography>
                            <Typography>
                                    {messageData.lastMessageTime}
                            </Typography>
                        </Grid>
                    </Grid>
                </Card>
            </Paper>
        </Container>
    )
}

export default SingleMessageCard
