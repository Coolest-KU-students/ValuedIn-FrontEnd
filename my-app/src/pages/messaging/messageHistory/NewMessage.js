import SendIcon from '@mui/icons-material/Send';
import React, { useState } from 'react';
import { Button, Card, Divider, Grid, Paper, TextField, Typography } from '@mui/material';

export const NewMessage = ({onSend}) => {

    const [message, setMessage] = useState([]);

    const sendMessage = () =>{
        onSend(message);
    };

    return (
        <Card style={{marginBottom:"1rem", marginLeft: "5rem"}}>
            <Paper>
                <Typography variant="body2" >
                    New Message
                </Typography>
                <Divider />
                <Paper>
                    <Grid container>
                        <Grid item xs={10} md={11}>
                            <TextField
                                margin="none"
                                fullWidth
                                required
                                onChange={setMessage}
                            />
                        </Grid>
                        <Grid item xs={2} md={1} style={{display: 'flex',alignItems: 'center',justifyContent: 'center',}}>
                            <Button>
                                <SendIcon color="primary" button onClick={sendMessage}/>
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Paper>
        </Card>
    )
}
