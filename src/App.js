// LIBS
import React, {Component} from 'react';


// CSS
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


// COMPONENTS
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
            user: {
                name: "Default User Name",
                age: "Default User Age",
                bio: "Default User Bio"
            },
            stat: {
                name: "Default Stat Name",
                description: "Default Stat Description",
                data: {
                    labels: [
                        'Red',
                        'Green',
                        'Yellow'
                    ],
                    datasets: [{
                        data: [300, 50, 100],
                        backgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56'
                        ],
                        hoverBackgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56'
                        ]
                    }]
                }
            },

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
            description: "The number of videos watched in a given month",
            data: {
            	labels: [
            		'Red',
            		'Green',
            		'Yellow'
            	],
            	datasets: [{
            		data: [120, 35, 400],
            		backgroundColor: [
            		'#AA3939',
            		'#226666',
            		'#7A9F35'
            		],
            		hoverBackgroundColor: [
            		'#AA3939',
            		'#226666',
            		'#7A9F35'
            		]
            	}]
            }
        }, {
            name: "Careers Created",
            description: "The number of careers created in a given month",
            data: {
            	labels: [
            		'Red',
            		'Green',
            		'Yellow'
            	],
            	datasets: [{
            		data: [200, 150, 400],
            		backgroundColor: [
            		'#FF0000',
            		'#00B8B8',
            		'#A2F300'
            		],
            		hoverBackgroundColor: [
            		'#FF0000',
            		'#00B8B8',
            		'#A2F300'
            		]
            	}]
            }
        }, {
            name: "Reports Completed",
            description: "The number of reports completed in a given month",
            data: {
            	labels: [
            		'Red',
            		'Green',
            		'Yellow'
            	],
            	datasets: [{
            		data: [100, 300, 50],
            		backgroundColor: [
            		'#F00038',
            		'#FFEB00',
            		'#0B5EC1'
            		],
            		hoverBackgroundColor: [
            		'#F00038',
            		'#FFEB00',
            		'#0B5EC1'
            		]
            	}]
            }
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
