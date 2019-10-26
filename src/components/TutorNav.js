import React, {Component} from 'react';
import {NavLink, Switch, Route, Redirect} from 'react-router-dom'
import {Nav} from 'react-bootstrap'
import Home from './Home'
import Billing from './Billing'
import ErrorPage from './ErrorPage'
import SessionView from './SessionView'

class TutorNav extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    
    render(){
        return(
            <React.Fragment>
                <Nav className= "nav-tabs">
                    <div className = "navItem">
                        <NavLink to="/tutor" exact={true} activeClassName="active" className="nav-link">
                            Home
                        </NavLink>
                    </div>
                    <div className = "navItem">
                        <NavLink to="/tutor/students" activeClassName="active" className="nav-link">
                            Students
                        </NavLink>
                    </div>
                    <div className = "navItem">
                        <NavLink to="/sessions" exact={true} activeClassName="active" className="nav-link">
                            Schedule
                        </NavLink>
                    </div>
                    <div className = "navItem">
                        <NavLink to="/Billing" exact={true} activeClassName="active" className="nav-link">
                            Billing
                        </NavLink>
                    </div>
                    <div className = "navItem">
                        <button className="nav-link" onClick={this.props.signOut}> Sign Out </button>
                    </div>
                </Nav>
                <Switch>
                    <Route exact path="/tutor" render={()=><Home tutorID = {this.props.tutorID} userInfo={this.props.userInfo}/>}>
                    </Route>
                    <Route path ="/tutor/students">
                    </Route>
                    <Route path ="/sessions" render={()=> <SessionView tutorID = {this.props.tutorID} userInfo={this.props.userInfo}/>}>
                    </Route>
                    <Route exact path ="/billing" component = {Billing}>
                    </Route>
                    <Redirect exact from="/" to="/tutor" />
                    <Route component = {ErrorPage}>
                    </Route>
                </Switch>
            </React.Fragment>      
        )
    }
}

export default TutorNav