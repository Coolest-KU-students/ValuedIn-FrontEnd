import { Button, TableCell, Typography } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import React from 'react'

export const UserTableHeaderCell = ({name, onClick, width, align, sortAsc}) => {

    const wrapInButton = !!onClick;
    const addSortingArrow = sortAsc != undefined;

    const addingText = (<Typography variant="h6">{name}</Typography>);
    const sortingArrow = (
        addSortingArrow 
         ?(sortAsc 
            ? ( <ArrowUpwardIcon style={{marginTop: '0',}} />) 
            : ( <ArrowDownwardIcon className={{marginTop: '0',}} />))
        : null
    );

    const wrappingInButtonIfNeeded = () =>{
        const childComponents = (
            <> {addingText} {sortingArrow} </>
        )

        if(!wrapInButton) return childComponents;

        return (
            <Button onClick = {onClick} >
                {childComponents}
            </Button>
        )
    }

    return (
        <TableCell align={align} width={width}>
           {wrappingInButtonIfNeeded()}
        </TableCell>
    )
}

