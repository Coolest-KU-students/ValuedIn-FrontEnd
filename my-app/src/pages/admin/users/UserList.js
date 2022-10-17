import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Checkbox, Container, TableFooter, Typography } from '@mui/material/';
import { Table, TableBody, TableCell, TableContainer, TableHead, Button, Paper } from '@mui/material/';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Modal from '@mui/material/Modal';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
//import { ChangeUserExpiration, LoadPaginatedData } from '../../DataSources/Users';
import UserModal from './UserModal';
import { makeStyles } from 'tss-react/mui';

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
    const [users, setUsers] = useState();
    const [column, setColumn] = useState({ name: 'login', ascending: true });
    const [paging, setPaging] = useState({ number: 0, size: 5 });
    const [showExpired, setShowExpired] = useState(false);
    const [Total, setTotal] = useState(1);
    const [ModalIsOpen, setModalOpen] = useState(false);
    const [EditIsOpen, setEditIsOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState({});

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
    };

    const SortData = (Column) => {
        if (column.name === Column) setColumn({ name: column.name, ascending: !column.ascending });
        else setColumn({ name: Column, ascending: true });
    };

    const ColumnWidths = [15, 10, 10, 15, 5, 5];

    const SumWidths = ColumnWidths.reduce((a, b) => a + b, 0);

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
       // ChangeUserExpiration(login, DataReload);
    };
    


    useEffect(() => {
        const props = {
            PageName: 'Users',
            currentListElement: 'Users',
        };
        AdjustNavbar(props, () => {
            return (
                <div>
                    <ListSubheader inset style={{ backgroundColor: 'inherit', color: 'inherit' }}>
                        Tasks
                    </ListSubheader>
                    <ListItem button onClick={handleOpen}>
                        <ListItemIcon>
                            <AddBoxIcon color={theme.navbarIcon} />
                        </ListItemIcon>
                        <ListItemText primary="Register New" />
                    </ListItem>
                </div>
            );
        });
    }, [theme]);
    
    console.log(classes);

    return (
        <React.Fragment>
            <Modal open={ModalIsOpen} onClose={handleClose}>
                <UserModal callback={callbackModal} />
            </Modal>
            <Modal open={EditIsOpen} onClose={handleClose}>
                <UserModal callback={callbackModal} userDetails={currentUser} />
    </Modal>
            {users ? (
                    <TableContainer
                        component={Paper}
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
                                    <TableCell align="left" width={(100 * ColumnWidths[0]) / SumWidths + '%'}>
                                        <Button
                                            onClick={() => {
                                                SortData('login');
                                            }}
                                        >
                                            <Typography variant="h6">Login</Typography>
                                            {column.name === 'login' &&
                                                (column.ascending ? (
                                                    <ArrowDownwardIcon className={classes.SortingArrow} />
                                                ) : (
                                                    <ArrowUpwardIcon className={classes.SortingArrow} />
                                                ))}
                                        </Button>
                                    </TableCell>

                                    <TableCell align="left" width={(100 * ColumnWidths[1]) / SumWidths + '%'}>
                                        <Button
                                            onClick={() => {
                                                SortData('Role');
                                            }}
                                        >
                                            <Typography variant="h6">Role</Typography>
                                            {column.name === 'Role' &&
                                                (column.ascending ? (
                                                    <ArrowDownwardIcon className={classes.SortingArrow} />
                                                ) : (
                                                    <ArrowUpwardIcon className={classes.SortingArrow} />
                                                ))}
                                        </Button>
                                    </TableCell>

                                    <TableCell align="right" width={(100 * ColumnWidths[2]) / SumWidths + '%'}>
                                        <Button
                                            onClick={() => {
                                                SortData('lastName');
                                            }}
                                        >
                                            <Typography variant="h6">Name</Typography>
                                            {column.name === 'lastName' &&
                                                (column.ascending ? (
                                                    <ArrowDownwardIcon className={classes.SortingArrow} />
                                                ) : (
                                                    <ArrowUpwardIcon className={classes.SortingArrow} />
                                                ))}
                                        </Button>
                                    </TableCell>
                                        
                                    <TableCell align="center" width={(100 * ColumnWidths[3]) / SumWidths + '%'}>
                                        <Button
                                            onClick={() => {
                                                SortData('lastActive');
                                            }}
                                        >
                                            <Typography variant="h6">Last Active</Typography>
                                            {column.name === 'lastActive' &&
                                                (column.ascending ? (
                                                    <ArrowDownwardIcon className={classes.SortingArrow} />
                                                ) : (
                                                    <ArrowUpwardIcon className={classes.SortingArrow} />
                                                ))}
                                        </Button>
                                    </TableCell>
                                    <TableCell align="center" width={(100 * ColumnWidths[4]) / SumWidths + '%'}>
                                        <Typography variant="h6">{showExpired ? 'RESTORE' : 'EXPIRE'}</Typography>
                                    </TableCell>
                                    <TableCell align="center" width={(100 * ColumnWidths[5]) / SumWidths + '%'}>
                                        <Typography variant="h6">EDIT</Typography>
                                    </TableCell>
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
            ) : (
                <Container>Loading...</Container>
            )}
        </React.Fragment>
    );
};

export default UsersList;

const LoadPaginatedData = (setData, configuration) => {
    setData(getMockData(configuration));
};

const getMockData = (configuration) => {
    console.log(configuration);
    return {
        content: [
            { login: 'Lukas', role: 'Admin', firstName: 'Lu', lastName: 'Kas', lastActive: '1999/05/26' },
            { login: 'Luknas', role: 'HR', firstName: 'Luk', lastName: 'Nas', lastActive: '1999/06/26' },
            { login: 'Lignas', role: 'Regular', firstName: 'Lig', lastName: 'Nas', lastActive: '1999/07/26' },
            { login: 'Ignas', role: 'SysAdmin', firstName: 'Ig', lastName: 'Nas', lastActive: '1999/08/26' },
        ],
        pageable: {
            sort: { sorted: true, unsorted: false, empty: false },
            offset: 0,
            pageNumber: 0,
            pageSize: 10,
            paged: true,
            unpaged: false,
        },
        last: true,
        totalElements: 4,
        totalPages: 1,
        size: 10,
        sort: { sorted: true, unsorted: false, empty: false },
        first: true,
        numberOfElements: 4,
        number: 0,
        empty: false,
    };
};

