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
                        'Red', 'Green', 'Yellow'
                    ],
                    datasets: [
                        {
                            data: [
                                300, 50, 100
                            ],
                            backgroundColor: [
                                '#FF6384', '#36A2EB', '#FFCE56'
                            ],
                            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
                        }
                    ]
                }
            },
            users: [
                            {
                  "name": "Luke Skywalker",
                  "height": "1.72 m",
                  "mass": "77 Kg",
                  "hair_color": "Blond",
                  "skin_color": "Caucasian",
                  "eye_color": "Blue",
                  "birth_year": "19 BBY",
                  "gender": "Male",
                  "homeworld": "http://swapi.co/api/planets/1/",
                  "films": [
                      "http://swapi.co/api/films/1/",
                      "http://swapi.co/api/films/2/",
                      "http://swapi.co/api/films/3/"
                  ],
                  "species": [
                      "http://swapi.co/api/species/1/"
                  ],
                  "vehicles": [
                      "http://swapi.co/api/vehicles/14/",
                      "http://swapi.co/api/vehicles/30/"
                  ],
                  "starships": [
                      "http://swapi.co/api/starships/12/",
                      "http://swapi.co/api/starships/22/"
                  ],
                  "created": "2014-12-09T13:50:51.644000Z",
                  "edited": "2014-12-10T13:52:43.172000Z",
                  "url": "http://swapi.co/api/people/1/"
            }

            ],
            stats: []

        };

        this.fetchData = this.fetchData.bind(this);
        this.setData = this.setData.bind(this);
        this.changeUser = this.changeUser.bind(this);
        this.changeStat = this.changeStat.bind(this);

    }

    componentDidMount() {
        this.fetchData();
    }
    setData(json) {
        console.log(json);
    }

    fetchData() {

        fetch('http://swapi.co/api/people', {
            headers: {
                'Accept': 'application/json'
            }
        }).then((response) => response.json().catch(err => {
            console.err(`'${err}' happened!`);
            return {};
        })).then((json) => {
            console.log('parsed json: ', json.results);
            this.setState({
                users: json.results,
                user: json.results[0],
                stats: [
                    {
                        name: "Height / Mass",
                        description: "Height and Mass Description",
                        data: {
                            labels: [
                                'Height', 'Mass'
                            ],
                            datasets: [
                                {
                                    data: [
                                        json.results[0].height, json.results[0].mass
                                    ],
                                    backgroundColor: [
                                        '#FF6384'
                                    ],
                                    hoverBackgroundColor: ['#FF6384']
                                }
                            ]
                        }
                    }

                ]
            })
        }).catch((err) => {
            console.log('fetch request failed: ', err)
        })
    }

    changeUser(e) {
        this.setState({
            user: this.state.users[e.target.value]
        });

    }

    changeStat(index, e) {

        this.setState({stat: this.state.stats[index]});

    }
    render() {

        return (
            <div className="app">
                <Grid className="app-container">
                    <Col xs={3} className="sidebar-container">
                        <SidebarComponent stats={this.state.stats} changeStat={this.changeStat}></SidebarComponent>
                    </Col>
                    <Col xs={9} className="content-container">
                        <Row>
                            <NavbarComponent></NavbarComponent>
                            <Col xs={9}>
                                <HeadingComponent text="Stats Dashboard"></HeadingComponent>

                            </Col>
                            <Col xs={3}>
                                <UserSelectComponent label="Choose Your User" users={this.state.users} changeUser={this.changeUser} user={this.state.user}></UserSelectComponent>
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
