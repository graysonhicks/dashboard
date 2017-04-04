import React from 'react';
import { ListGroupItem } from 'react-bootstrap';
import './SideBarStat.css';

export const SideBarStatComponent = (props) => {
    const active = (props.index == 0) ? 'active' : null
    return (
        <ListGroupItem className="sidebar-list-group-item" href="#" active={active}> {props.name} </ListGroupItem>
    )
}

export default SideBarStatComponent;
