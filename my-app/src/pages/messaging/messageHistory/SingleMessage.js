import { Card, Divider, Paper, Typography } from '@mui/material';
import React from 'react';

export const SingleMessage = ({message}) => {

    const cardStyle = message.isAuthor ? {marginLeft: "5rem"} : {marginRight: "5rem"};

    return (
        <Card style={{marginBottom:"1rem", ...cardStyle}}>
            <Paper>
                <Typography variant="body2">
                    {message.fullName} {message.sentTime}
                </Typography>
                <Divider />
                <Paper>
                    <Typography variant="body">
                        {message.messageContent}
                    </Typography>
                </Paper>
            </Paper>
        </Card>
    )
}
