import React, { Component } from "react";
import PropTypes from "prop-types";
import "./../style/Panel.css";

export default class Panel extends Component {
    render() {
        console.log(this);
        return (
            <div className="component-panel">
                <div className="header">{this.props.title}</div>
                {this.props.children}
            </div>
        )
    }
}

Panel.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired
}