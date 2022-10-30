import { Container, Modal } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { loadMessageOverviews } from '../../../API/internal_datasources/Messages';
import { LoadingWrapper } from '../../global/loadingMgmt/LoadingWrapper';
import { InteractionModalWrapper } from '../../global/wrappers/InteractionModalWrapper';
import { MessageSidebarTasks } from './MessageSidebarTasks';
import { NewChatModal } from './NewChatModal';
import SingleMessageCard from './SingleMessageCard';

const Messages = ({AdjustNavbar}) => {
    
    const [messageOverviewData, setMessageOverviewData] = useState([]);
    const [initialLoadDone, setInitialLoadDone] = useState(false);
    const [newChatModal, openNewChatModal] = useState(false);

    useEffect(() => {
        const props = {
            PageName: 'Messages',
            currentListElement: 'Messages',
        };

        AdjustNavbar(props, ()=> <MessageSidebarTasks onNewClick={()=>{openNewChatModal(true)}}/>);
        DataReload();
    }, []);

    const DataReload = () =>{
        loadMessageOverviews(LoadData);
    };

    const LoadData = (data) =>{
        setMessageOverviewData(data);
        console.log(messageOverviewData);
        setInitialLoadDone(true);
    };

    return  (
        <>
            <InteractionModalWrapper open={newChatModal}>
                <NewChatModal callback={a=>{console.log(a); openNewChatModal(false)}} />
            </InteractionModalWrapper>
            <LoadingWrapper loaded = {initialLoadDone}>
                <Container>
                    { messageOverviewData.map(message => 
                            <SingleMessageCard messageData={message} />
                        )
                    }
                </Container>
            </LoadingWrapper>
        </>
    ) 
}

export default Messages
