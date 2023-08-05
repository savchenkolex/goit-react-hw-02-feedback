import React, {Component} from "react";
import PropTypes from "prop-types";
import css from "./Statistics.module.css";


class Statistics extends Component {

    render() {
        return (
            <>
            <h2>Statistics</h2>
            <ul>
                <li>Good: </li>
                <li>Neutral: </li>
                <li>Bad: </li>
            </ul>
            </>
        )
    }
}

export default Statistics;