import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Checkbox, Container, TableFooter, Typography } from '@mui/material/';
import { Table, TableBody, TableCell, TableContainer, TableHead, Button, Paper } from '@mui/material/';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Modal from '@mui/material/Modal';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
//import { ChangeUserExpiration, LoadPaginatedData } from '../../DataSources/Users';
import UserModal from './UserModal';
import { makeStyles } from 'tss-react/mui';
import { ChangeUserExpiration, LoadPaginatedData } from '../../../API/internal_datasources/Users';
import { UserSidebarTasks } from './UserSidebarTasks';
import { UserTableHeaderCell } from './UserTableHeaderCell';
import { LoadingWrapper } from '../../global/loadingMgmt/LoadingWrapper';
import { InteractionModalWrapper } from '../../global/wrappers/InteractionModalWrapper';

const drawerWidth = 240;
const useStyles = makeStyles()((theme) => ({
        SortingArrow: {
            marginTop: '0',
        },
        TableRows: {
            '&:nth-of-type(odd)': {
                backgroundColor: '#efeffa',
            },
            '&:nth-of-type(even)': {
                backgroundColor: '#cadafa',
            },
        },
        TableHead: {
            backgroundColor: '#c5c2c9',
        },
        BodyTableCells: {
            paddingRight: '2rem',
        },
        NewIssueModal: {},
    }));

const UsersList = ({ AdjustNavbar }) => {
    const [users, setUsers] = useState([]);
    const [column, setColumn] = useState({ name: 'login', ascending: true });
    const [paging, setPaging] = useState({ number: 0, size: 5 });
    const [showExpired, setShowExpired] = useState(false);
    const [Total, setTotal] = useState(1);
    const [ModalIsOpen, setModalOpen] = useState(false);
    const [EditIsOpen, setEditIsOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState({});
    const [dataLoaded, setDataLoaded] = useState(false);
    const theme = useSelector((state) => state.Theme);

    useEffect(() => {
        DataReload();
    }, [column, showExpired, paging]);
    /*Users JSON:
    {   Login,
        FirstName,
        LastName,
        LastActive
    }*/

    const DataReload = () => {
        LoadPaginatedData(DistributeData, {
            showExpired: showExpired,
            page: paging.number,
            size: paging.size,
            orderBy: column.name,
            ascending: column.ascending,
        });
    };

    const DistributeData = (data) => {
        setUsers(data.content);
        setTotal(data.totalElements);
        setDataLoaded(true);
    };

    const SortData = (Column) => {
        if (column.name === Column) setColumn({ name: column.name, ascending: !column.ascending });
        else setColumn({ name: Column, ascending: true });
    };

    const ColumnWidths = [15, 10, 10, 15, 5, 5];

    const SumWidths = ColumnWidths.reduce((a, b) => a + b, 0);
    const calculateColumnWidths = (index) =>{
        return (100 * ColumnWidths[index]) / SumWidths + '%'
     }

    const { classes } = useStyles();

    const callbackModal = () => {
        handleClose();
        DataReload();
    };

    const handleOpen = () => {
        setModalOpen(true);
    };

    const handleEdit = (user) => {
        setCurrentUser(user);
        setEditIsOpen(true);
    };
    const handleClose = () => {
        setModalOpen(false);
        setEditIsOpen(false);
    };

    const handlePaging = (event, number) => {
        setPaging({ number: number, size: paging.size });
    };

    const handlePageSizing = (event) => {
        setPaging({ number: paging.number, size: event.target.value });
    };

    const ChangeExpiration = (login) => {
        ChangeUserExpiration(login, DataReload);
        
    };
    
    const userSidebarTasks = () =>{
        return UserSidebarTasks(handleOpen);
    }

    useEffect(() => {
        const props = {
            PageName: 'Users',
            currentListElement: 'Users',
        };
        AdjustNavbar(props, userSidebarTasks);
    }, [theme]);

    return (
        <React.Fragment>
            <InteractionModalWrapper open={ModalIsOpen} onClose={handleClose}>
                <UserModal callback={callbackModal} />
            </InteractionModalWrapper>
            <InteractionModalWrapper open={EditIsOpen} onClose={handleClose}>
                <UserModal callback={callbackModal} userDetails={currentUser} />
            </InteractionModalWrapper>
            <LoadingWrapper loaded={dataLoaded}>
                <TableContainer component={Paper}
                    style={{ padding: '1rem', paddingBottom: '0px', backgroundColor: theme.tableContainerColor }}
                >
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align="right" width="20%">
                                    <Typography>
                                        <Checkbox
                                            onChange={() => {
                                                setShowExpired(!showExpired);
                                            }}
                                        />
                                        Show&nbsp;Expired
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                    </Table>
                    <Table>
                        <TableHead className={classes.TableHead}>
                            <TableRow>
                                <TableCell width="5%" />
                                
                                <UserTableHeaderCell align="left" width={calculateColumnWidths(0)} 
                                    name={'Login'} onClick={()=>{SortData('login');}}
                                    sortAsc={column.name ==='login'?column.ascending : undefined}
                                />
                                
                                <UserTableHeaderCell align="left" width={calculateColumnWidths(1)} 
                                    name={'Role'} onClick={()=>{SortData('role');}}
                                    sortAsc={column.name ==='role'?column.ascending : undefined}
                                />
                                
                                <UserTableHeaderCell align="right" width={calculateColumnWidths(2)} 
                                    name={'Name'} onClick={()=>{SortData('lastName');}}
                                    sortAsc={column.name ==='lastName'?column.ascending : undefined}
                                />
                                    
                                <UserTableHeaderCell align="center" width={calculateColumnWidths(3)} 
                                    name={'Last Active'} onClick={()=>{SortData('lastActive');}}
                                    sortAsc={column.name ==='lastActive'?column.ascending : undefined}
                                />

                                <UserTableHeaderCell align="center" width={calculateColumnWidths(4)} name={showExpired ? 'RESTORE' : 'EXPIRE'}/>
                                
                                <UserTableHeaderCell align="center" width={calculateColumnWidths(5)} name={'EDIT'}/>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map((user) => (
                                <TableRow key={user.login} className={classes.TableRows}>
                                    <TableCell />
                                    <TableCell
                                        align="left"
                                        className={classes.BodyTableCells}
                                        style={{ paddingLeft: '2rem ' }}
                                    >
                                        {user.login}
                                    </TableCell>

                                    <TableCell align="left" className={classes.BodyTableCells} 
                                        style={{ paddingLeft: '2rem ' }}>
                                        {user.role}
                                    </TableCell>

                                    <TableCell align="right" className={classes.BodyTableCells}>
                                        {user.firstName} {user.lastName}
                                    </TableCell>

                                    <TableCell align="center" className={classes.BodyTableCells}>
                                        {user.lastActive ? (
                                            <div>
                                                {user.lastActive.toString().replace('T', String.fromCharCode(160))}
                                            </div>
                                        ) : (
                                            'No data'
                                        )}
                                    </TableCell>
                                    <TableCell align="center" style={theme.BodyTableCells}>
                                        <Button
                                            className={classes.deleteButton}
                                            onClick={() => {
                                                ChangeExpiration(user.login);
                                            }}
                                        >
                                            <RemoveCircleOutlineRoundedIcon />
                                        </Button>
                                    </TableCell>
                                    <TableCell align="center" style={theme.BodyTableCells}>
                                        <Button
                                            className={classes.deleteButton}
                                            onClick={() => {
                                                handleEdit(user);
                                            }}
                                        >
                                            <BorderColorOutlinedIcon />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                            <TableRow>
                                
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 25]}
                                count={Total}
                                rowsPerPage={paging.size}
                                page={paging.number}
                                onPageChange={handlePaging}
                                onRowsPerPageChange={handlePageSizing}
                            />
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </LoadingWrapper>
        </React.Fragment>
    );
};

export default UsersList;