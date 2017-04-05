import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import {Grid, Row, Col} from 'react-bootstrap';
import HeadingComponent from './components/Heading/Heading-1';
import NavbarComponent from './components/Navbar/Navbar';
import SidebarComponent from './components/Sidebar/Sidebar'
import UserSelectComponent from './components/UserSelect/UserSelect'
import UserStatsComponent from './components/UserStats/UserStats'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            stat: {}
        };

        this.changeUser = this.changeUser.bind(this);
        this.changeStat = this.changeStat.bind(this);
    }

    users = [
        {
            name: "Grayson Hicks",
            age: 27,
            bio: "bio 1"
        }, {
            name: "Thomas Merton",
            age: 32,
            bio: "bio 2"
        }, {
            name: "Albert Einstein",
            age: 47,
            bio: "bio 3"
        }
    ];

    stats = [
        {
            name: "Videos Watched",
            description: "The number of videos watched in a given month"
        }, {
            name: "Careers Created",
            description: "The number of careers created in a given month"
        }, {
            name: "Reports Completed",
            description: "The number of reports completed in a given month"
        }
    ];

    changeUser(e) {

        this.setState({
            user: this.users[e.target.value]
        });
    }

    changeStat(index, e) {

        this.setState({
            stat: this.stats[index]
        });


    }
    render() {
console.log(this.state);
        return (
            <div className="app">
                <Grid className="app-container">
                    <Col xs={3} className="sidebar-container">
                        <SidebarComponent stats={this.stats} changeStat={this.changeStat}></SidebarComponent>
                    </Col>
                    <Col xs={9} className="content-container">
                        <Row>
                            <NavbarComponent></NavbarComponent>
                            <Col xs={9}>
                                <HeadingComponent text="Stats Dashboard"></HeadingComponent>

                            </Col>
                            <Col xs={3}>
                                <UserSelectComponent label="Choose Your User" users={this.users} changeUser={this.changeUser} user={this.state.user}></UserSelectComponent>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12}>
                                <UserStatsComponent user={this.state.user} stat={this.state.stat}></UserStatsComponent>
                            </Col>
                        </Row>
                    </Col>
                </Grid>

            </div>
        );
    }
}

export default App;
