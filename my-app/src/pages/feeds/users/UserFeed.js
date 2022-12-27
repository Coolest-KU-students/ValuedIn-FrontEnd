import React, { useEffect, useState } from 'react'
import { GetUserFeed } from '../../../API/internal_datasources/Users'
import { UserTile } from './UserTile';
import { Grid, Paper, Table, TableFooter, TablePagination } from '@mui/material';
import SearchBar from '../../global/SearchBar';
import { SortingCard } from '../../global/SortingCard';



export const UserFeed = ({AdjustNavbar}) => {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(4);
    const [textSearch, setTextSeach] = useState("");


    const total = 114; 
    const callback=(values)=>{
        console.log(values);
        setUsers(values);
    }

    const resetAndCallUserData = () =>{
        GetUserFeed(callback, {page: page, pageSize: pageSize, textSearch: textSearch});
    }

    const handlePaging = () =>{
        setPage(page+1);
        resetAndCallUserData();
    }
    const handlePageSizing = (e) => {
        setPageSize(e.target.value);
        resetAndCallUserData();
    }

    const handleTextSearch = (searchedWord) =>{
        setTextSeach(searchedWord);
        resetAndCallUserData();
    }

    useEffect(() => {
        resetAndCallUserData();
    }, [page, pageSize, textSearch])

    useEffect(() => {
        const props = {
            PageName: 'User Feed',
            currentListElement: 'Users',
        };
        AdjustNavbar(props, () => {});}
        , []);

    
    return (
        <Paper style={{backgroundColor: "#FFFFFFAA"}}>
            <Grid container spacing={10}>
            <Grid item xs={12}>
                <SearchBar 
                    onRequestSearch={(value) => handleTextSearch(value)}
                    style={{marginLeft: '25px', marginRight: "25px"}}
                />
                
                <SortingCard style={{marginLeft:"15px"}}></SortingCard>
                </Grid>
                <Grid item xs={12} style={{paddingTop: "5px"}}>
            {users.map(
            user => <UserTile userData={user} key={user.fullName} /> 
                )}
                </Grid>
            
                <Table>
                    <TableFooter>
                        <TablePagination
                            rowsPerPageOptions={[4, 8, 10]}
                            count={total}
                            rowsPerPage={users.length}
                            page={page}
                            onPageChange={handlePaging}
                            onRowsPerPageChange={handlePageSizing}
                        />
                    </TableFooter>
                </Table>
            </Grid>
        </Paper>
    )
}
