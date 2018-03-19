import React from 'react';

const DropdownContent = (props) => (
    <div id="myDropdown" className="dropdown-content">
        {props.children}
    </div>
);

export default DropdownContent;