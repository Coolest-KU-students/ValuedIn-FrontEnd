import { Button, FormControl, InputLabel, MenuItem, Paper, Select } from '@mui/material';
import React, { useState } from 'react'

export const ValuesModal = ({callback}) => {
    const [chosenUser, setChosenUser] = useState("");
    const mockedChattingBuddies = ["John", "Kennedy", "Williams"] ;

    const createChat = () =>{
        callback(chosenUser);
    }
    
    return (
        <Paper style={{padding:"20px"}}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Choose User</InputLabel>
                <Select
                    id="demo-simple-select" 
                    label="User"
                    style={{ margin: 8 }}
                    onChange={(e)=>{setChosenUser(e.target.value)}}
                >   
                    {
                    mockedChattingBuddies.map(buddy =>{ 
                        return (
                            <MenuItem value={buddy}>{buddy}</MenuItem>
                    )})}
                </Select>
            </FormControl>
            <Button
                variant="contained"
                fullWidth
                color="primary"
                size="large"
                onClick={createChat}
            >
                Create Chat
            </Button>
        </Paper>
    )
}
