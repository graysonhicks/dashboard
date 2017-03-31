import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Row, Col, Image } from 'react-bootstrap';


var listGroupItemStyles = {
    'borderRadius': '0px',
    'border': 'none'
}

var sidebarImageContainerStyles = {
    'padding': '20px',
    'textAlign': 'center'
}

class SidebarComponent extends Component {

  render() {
    return (
            <Row>
                <Col xs={12}>
                        <div style={ sidebarImageContainerStyles }>
                            <Image src="http://placehold.it/170x181" rounded />
                        </div>
                        <ListGroup>
                          <ListGroupItem style={listGroupItemStyles} href="#" active>Link 1</ListGroupItem>
                          <ListGroupItem style={listGroupItemStyles} href="#">Link 2</ListGroupItem>
                          <ListGroupItem style={listGroupItemStyles} href="#" disabled>Link 3</ListGroupItem>
                        </ListGroup>
                </Col>
            </Row>

    );
  }
}

export default SidebarComponent;
