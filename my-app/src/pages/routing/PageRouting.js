import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import CheckForUserPermissions from '../../config/permissions/RoleAppPermissions';
import UsersList from '../admin/users/UserList';
import LogIn from '../authentication/Login';
import JobFeed from '../feeds/jobs/JobFeed';
import OrganizationFeed from '../feeds/organizations/OrganizationFeed';
import Navbar from '../global/navbar/Navbar';
import MainBodyWrapper from '../global/wrappers/MainBodyWrapper';
import { useSelector } from 'react-redux';
import APP_GROUPS from '../../config/enums/AppGroups';
import Messages from '../messaging/messagingOverview/Messages';
import { MessageHistoryTrail } from '../messaging/messageHistory/MessageHistoryTrail';
import { ToastWrapper } from '../global/notifications/ToastWrapper';
import { toast } from 'react-toastify';

const PageRouting = () => {
    const [IsAuthenticated, setAuthenticated] = useState(false);

    const userRole = useSelector(state => state.UserRole);


    useEffect(() => {
        checkJWTValidity(SetLoadedAndAuthenticated, setLoaded);
    }, []);

    const SetLoadedAndAuthenticated = (auth) => {
        setAuthenticated(auth);
        setLoaded(true);
    };




   /* const AuthenticationCallback = () => {
        setAuthenticated(true);
    };*/


    

    const AuthenticateUser = (credentials) => {
        ToastWrapper("Logging In").default("Logging In...")

        ToastWrapper().success("Successfully logged in");
        setAuthenticated(true);
    };

    const LogOut = () => {
        //CleanJWTToken();
        ToastWrapper().success("Logged Out!");
        setAuthenticated(false);
    };

    const UserHasAccessTo = (accessGroup) =>{
       return CheckForUserPermissions(userRole, accessGroup);
    }

    /***********
      Navbar Control section
    ***********/
    const [navbarConfig, setNavbarConfig] = useState({
        props: '',
        children: () => {},
    });

    const AdjustNavbar = (currentPageProps, currentNavbarChildren) => {
        setNavbarConfig({
            props: currentPageProps,
            children: currentNavbarChildren,
        });
    };
    

    /*************/
    return (
        <React.Fragment>
            <Router>
                {IsAuthenticated && (
                    <>
                        <Navbar {...navbarConfig.props}>{navbarConfig.children()}</Navbar>
                        <Switch>
                            {UserHasAccessTo(APP_GROUPS.FEEDS) &&
                                <Route exact path="/jobs">
                                    <MainBodyWrapper>
                                        <JobFeed AdjustNavbar={AdjustNavbar} />
                                    </MainBodyWrapper>
                                </Route>
                            }
                            {UserHasAccessTo(APP_GROUPS.FEEDS) &&
                                <Route exact path="/organizations">
                                    <MainBodyWrapper>
                                        <OrganizationFeed AdjustNavbar={AdjustNavbar} />
                                    </MainBodyWrapper>
                                </Route>
                            }
                            {UserHasAccessTo(APP_GROUPS.SYSTEM_APP) &&
                                <Route exact path="/users">
                                    <MainBodyWrapper>
                                        <UsersList AdjustNavbar={AdjustNavbar} />
                                    </MainBodyWrapper>
                                </Route>
                            }
                            {UserHasAccessTo(APP_GROUPS.CHATBOX) &&
                                <Route exact path="/messages">
                                    <MainBodyWrapper>
                                        <Messages AdjustNavbar={AdjustNavbar} />
                                    </MainBodyWrapper>
                                </Route>
                            }{UserHasAccessTo(APP_GROUPS.CHATBOX) &&
                                <Route exact path="/messages/:id">
                                    <MainBodyWrapper>
                                        <MessageHistoryTrail AdjustNavbar={AdjustNavbar} />
                                    </MainBodyWrapper>
                                </Route>
                            }
                            <Route
                                exact
                                path="/logout"
                                render={() => {
                                    LogOut();
                                    return <Redirect exact to="/" />;
                                }}
                            />
                            
                            {UserHasAccessTo(APP_GROUPS.JOB_FEED) && <Redirect exact to="/jobs"/>}
                            {UserHasAccessTo(APP_GROUPS.SYSTEM_APP) && <Redirect exact to="/users"/>}
                        </Switch>
                    </>
                )}
                { IsAuthenticated === false && <LogIn setAuthenticated={AuthenticateUser}></LogIn>}
            </Router>
        </React.Fragment>
    );
};

/* Temporary */

export default PageRouting;
