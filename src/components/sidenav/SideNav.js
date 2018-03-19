import React, { Component } from 'react';
import './sidenav.css';

const bodyStyles = {
    width: '100%',
    background: 'yellow'
}


export default class SideNav extends Component {
    constructor() {
        super();
        this.state = {
            openClose: false
        }
    }

    handleOpenNav = () => {
        this.setState({
            openClose: true
        });
    }

    handleCloseNav = () => {
        this.setState({
            openClose: false
        });
    }

    render() {
        const openStyles = {
            width: this.props.fullWidth ? '100%' : '20rem',
            transition: this.props.animate ? '0.5s' : 'none',
        }
        
        const closeStyles = {
            width: 0,
            transition: this.props.animate ? '0.5s' : 'none' 
        }

        const bodyStyles = {
            marginLeft: this.props.overlay && this.state.openClose ? '20rem' : 0,
            transition: 'margin-left .5s',
        }

        return (
            <div>
                <div id="mySidenav" className="sidenav" style={this.state.openClose ? openStyles: closeStyles}>
                    <a href="javascript:void(0)" className="closebtn" onClick={this.handleCloseNav}>&times;</a>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Clients</a>
                    <a href="#">Contact</a>
                </div>
                <div style={bodyStyles}>
                    <span onClick={this.handleOpenNav}>open</span>
                    {this.props.children}
                </div>
            </div>
        );
    }
}