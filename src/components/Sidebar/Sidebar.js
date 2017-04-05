import React, { Component } from 'react';
import { ListGroup, Row, Col, Image } from 'react-bootstrap';
import SideBarStatComponent from '../SideBarStat/SideBarStat'
import './Sidebar.css';

class SidebarComponent extends Component {

  render() {
    return (
            <Row>
                <Col xs={12}>
                        <div className="sidebar-image-container">
                            <Image src="http://placehold.it/170x181" rounded />
                        </div>
                        <ListGroup>
                            {this.props.stats.map((stat, i) =>

                                <SideBarStatComponent
                                    className="sidebar-list-group-item"
                                    href="#"
                                    key={i}
                                    name={stat.name}
                                    index={i}
                                    changeStat={this.props.changeStat}
                                    />


                            )}


                        </ListGroup>
                </Col>
            </Row>

    );
  }
}

export default SidebarComponent;
