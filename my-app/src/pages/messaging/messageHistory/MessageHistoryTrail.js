import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { loadMessageHistory } from '../../../API/internal_datasources/Messages';
import { SingleMessage } from './SingleMessage';

export const MessageHistoryTrail = () => {

    const [messages, setMessages] = useState([]);
    const [initialLoadDone, setInitialLoadDone] = useState(false);

    useEffect(() => {
        DataReload();
    }, []);

    const id = useParams();

    const DataReload = () =>{
        loadMessageHistory(id, LoadData);
    };

    const LoadData = (data) =>{
        setMessages(data);
        console.log(messages);
        setInitialLoadDone(true);
    };
    
    return (
        <>
        {!initialLoadDone ?
            <div> 
                Loading...
            </div>
            :
            <Container>
                {
                    messages.map(message => 
                        <SingleMessage message={message} />
                    )
                }
            </Container>
        }
        </>
    )
}
