import React, { Component } from 'react';

const styles = {
    position: 'fixed',
    right: 0,
    bottom: 0,
    minWidth: '100%', 
    minHeight: '100%',
}

export default class FullPageVideo extends Component {
    render() {
        return (
            <video autoPlay loop muted style={styles}>
                <source src={this.props.src} type="video/mp4" />
            </video>
        );
    }
}