import { FormControl, IconButton, InputLabel, MenuItem, Paper, Select, Typography } from '@mui/material'
import React, { useState } from 'react';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

export const SortingCard = () => {

    const [sort, setSort] = useState("Name")
    const [sortUp, setSortUp] = useState(true);

    return (
        <Paper style={{margin: "5px", width:"225px", marginLeft:"15px"}}>
                <FormControl > 
                    <InputLabel id="demo-simple-select-label"> Sort By:</InputLabel>
                    <Select
                        id="demo-simple-select" 
                        value={sort}
                        label="Sort By"
                        style={{ margin: 8 }}
                        defaultValue={"Name"}
                        fullWidth
                        onChange={(e)=>{setSort(e.target.value)}}
                    >   
                        <MenuItem value="Name">Name</MenuItem>
                        <MenuItem value="Values">Values</MenuItem>
                        <MenuItem value="Locations">Locations</MenuItem>
                        <MenuItem value="Match">Match</MenuItem>
                    </Select>
                </FormControl> 
                <IconButton onClick={()=>setSortUp(!sort)} style={{marginLeft:"10px"}}> 
                    {sortUp? <ArrowCircleUpIcon color="primary" sx={{ fontSize: 60 }} /> : <ArrowCircleDownIcon color="secondary" sx={{ fontSize: 60 }} /> }
                </IconButton>
        </Paper>
    )
}
