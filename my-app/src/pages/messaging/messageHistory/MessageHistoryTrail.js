import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { loadMessageHistory, sendNewMessage } from '../../../API/internal_datasources/Messages';
import { LoadingWrapper } from '../../global/loadingMgmt/LoadingWrapper';
import { NewMessage } from './NewMessage';
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
        setInitialLoadDone(true);
    };

    const sendMessage = (messageContent) =>{
        sendNewMessage(id, messageContent, ()=>{});
    }
    
    return (
        <LoadingWrapper loaded={initialLoadDone}>
            <Container>
                <NewMessage onSend={sendMessage} />
                {
                    messages.map(message => 
                        <SingleMessage message={message} />
                    )
                }
            </Container>
        </LoadingWrapper>
    )
}
