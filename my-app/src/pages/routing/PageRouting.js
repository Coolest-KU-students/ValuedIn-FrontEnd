import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import UsersList from '../admin/users/UserList';
import LogIn from '../authentication/Login';
import JobFeed from '../feeds/jobs/JobFeed';
import OrganizationFeed from '../feeds/organizations/OrganizationFeed';
import Navbar from '../global/navbar/Navbar';
import MainBodyWrapper from '../global/wrappers/MainBodyWrapper';

const PageRouting = () => {
    const [IsAuthenticated, setAuthenticated] = useState(false);


   /* useEffect(() => {
        CheckJWTIsValid(SetLoadedAndAuthenticated);
    }, []);
*/
    /*const SetLoadedAndAuthenticated = (auth) => {
        setAuthenticated(auth);
        setLoaded(true);
    };
*/
   /* const AuthenticationCallback = () => {
        setAuthenticated(true);
    };*/

    const AuthenticateUser = (credentials) => {
        setAuthenticated(true);
    };

    const LogOut = () => {
        //CleanJWTToken();
        setAuthenticated(false);
    };

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
                            <Route exact path="/jobs">
                            
                                <MainBodyWrapper>
                                    <JobFeed AdjustNavbar={AdjustNavbar} />
                                </MainBodyWrapper>
                                
                                {/*   <IssueList AdjustNavbar={AdjustNavbar} />*/}
                            </Route>
                            <Route exact path="/issues/:id">
                                {/* <IssueView AdjustNavbar={AdjustNavbar} />*/}
                            </Route>
                            <Route exact path="/organizations">
                                <MainBodyWrapper>
                                    <OrganizationFeed AdjustNavbar={AdjustNavbar} />
                                </MainBodyWrapper>
                            </Route>
                            <Route exact path="/users">
                                <MainBodyWrapper>
                                    <UsersList AdjustNavbar={AdjustNavbar} />
                                </MainBodyWrapper>
                            </Route>
                            <Route exact path="/importances">
                                {/*<ImportanceList AdjustNavbar={AdjustNavbar} />*/}
                            </Route>
                            <Route
                                exact
                                path="/logout"
                                render={() => {
                                    LogOut();
                                    return <Redirect exact to="/" />;
                                }}
                            />
                            <Redirect exact to="/jobs"/>
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
