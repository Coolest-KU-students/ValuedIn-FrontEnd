import { Modal } from '@mui/material'
import React from 'react'

export const InteractionModalWrapper = ({open, onClose, children}) => {
    return (
        <Modal open={open} onClose={onClose} style={{display:'flex',alignItems:'center',justifyContent:'center', marginBottom:"15%"}}>
            {children}
        </Modal>
    )
}
