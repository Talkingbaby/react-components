import React, { Component } from 'react';
import './dropdown.css';

import DropdownContent from './DropdownContent';



export default class Dropdown extends Component {
    state = {
        dropped: false
    }

    handleDrop = (event) => {
        this.setState({
            dropped: !this.state.dropped
        });
    }

    render() {
        return (
            <div className="dropdown">
                <button onClick={this.handleDrop} className="dropbtn">Dropdown</button>
                {
                    this.state.dropped ?
                        <DropdownContent>
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </DropdownContent>
                        :
                        null
                }
            </div>
        );
    }
}