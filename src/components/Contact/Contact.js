import React, { Component } from 'react';

class Contact extends Component {
    render() {
        console.log(this.props.match)
        return (
            <div className="contact">
                <img src={this.props.profile_picture} alt="profilepic"/>
                <h3>{this.props.name}</h3>
                <h4>{this.props.email}</h4>
            </div>
        );
    }
}

export default Contact;