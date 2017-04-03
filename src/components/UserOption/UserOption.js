import React, {
    Component
} from 'react';
import './UserOption.css';

export const UserOptionComponent = ({name, index}) => {

    return (
        <option value={index} > {name} </option>
    )
}

export default UserOptionComponent;
